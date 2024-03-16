import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ show, setshow, pdfUrl }) {
  const [open, setopen] = useState(false);

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


  // const modalStyles = {
  //   modalDialog: {
  //     maxWidth: "800px", /* Adjust as needed */
  //   },
  //   // Medium screens (tablets)
  //   '@media (max-width: 992px)': {
  //     modalDialog: {
  //       maxWidth: "600px", /* Adjust as needed */
  //     },
  //   },
  //   // Small screens (phones)
  //   '@media (max-width: 576px)': {
  //     modalDialog: {
  //       width: "500px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 0px", /* Adjust as needed */
  //     },
  //   },
  //   backdrop: {
  //     opacity: 0,
  //   }
  // };

  return (
    <>
        <Modal
          size="lg"
          show={open}
          onHide={() => setopen(false)}
          animation={false}
          // backdropStyle={modalStyles.backdrop}
        >
          <Modal.Body style={{ backgroundColor: "#777777", padding: '15px' }}>
            {/* <embed type="application/x-google-chrome-pdf" src={pdfUrl} original-url={pdfUrl} background-color="4283586137" javascript="allow"/> */}
          <div style={{background: '#eceff1', padding: '8px', borderRadius: '5px', height: '100%'}}>
          <iframe
              src={pdfUrl}
              style={{ width: "100%", height: "50%", border: "none" }}
            ></iframe>
            <div style={{height: '50px', padding: '10px'}}>
              <a href="#" className="gray-anchor" 
              style={{color:'#777777', background: 'white', padding: '5px 11px', borderRadius: '18px', border: '1px solid #8080805c' }} 
              download>download</a>
            </div>
          </div>
          </Modal.Body>

        </Modal>
    </>
  );
}

export default Example;
