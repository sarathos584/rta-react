import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Example({ show, setshow, pdfUrl }) {
 const [open, setopen] = useState(false);

 const theme = useTheme();
 const fullScreen = true

 useEffect(() => {
    if (pdfUrl) {
      setTimeout(()=> {
        setopen(true);
      }, 5000)
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

 return (
    <>
      <Dialog
        open={open}

        fullScreen={fullScreen}
        PaperProps={{
          style: {
            backgroundColor: '#000',
            boxShadow: 'none',
            opacity: '0.7'
           
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
              src={pdfUrl}
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </Box>
        </DialogContent>
      </Dialog>
    </>
 );
}

export default Example;
