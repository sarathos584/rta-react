import { useEffect, useState, useRef } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';

function Example({ show, setshow, pdfUrl }) {
 const [open, setopen] = useState(false);

 const fullScreen = true;

 useEffect(() => {
    if (pdfUrl) {
      setTimeout(()=> {
        setopen(true);
      }, 2000)
    }
 }, [pdfUrl]);

 useEffect(() => {
    const body = document.querySelector('body');
    if (open) {
      body.style.paddingRight = '0px'; // Remove right padding
    }
    return () => {
      body.style.paddingRight = ''; // Reset padding when modal is closed
    };
 }, [open]);

 // Append #view=FitH to the pdfUrl to ensure it fits horizontally
 const pdfUrlWithViewParam = pdfUrl + '#view=FitH';

 // Function to close the dialog
 const handleClose = () => {
    setopen(false);
 };

 return (
    <>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose} // Add this line to handle closing the dialog
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.764)',
            boxShadow: 'none',
          },
        }}
        BackdropProps={{
          style: {
            backdropFilter: 'blur(3px)',
          },
        }}
      >
        <DialogContent>
          <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <iframe
              src={pdfUrlWithViewParam}
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </Box>
        </DialogContent>
      </Dialog>
    </>
 );
}

export default Example;
