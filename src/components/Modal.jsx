import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ show, setshow, pdfUrl }) {
  const [open, setopen] = useState(false);

  useEffect(() => {
    if (pdfUrl) {
      setopen(true);
    }
  }, [pdfUrl]);

  const modalStyles = {
    modalDialog: {
      maxWidth: "800px", /* Adjust as needed */
    },
    // Medium screens (tablets)
    '@media (max-width: 992px)': {
      modalDialog: {
        maxWidth: "600px", /* Adjust as needed */
      },
    },
    // Small screens (phones)
    '@media (max-width: 576px)': {
      modalDialog: {
        width: "44w                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 0px", /* Adjust as needed */
      },
    },
    backdrop: {
      opacity: 0,
    }
  };

  return (
    <>
      <div className="container">
        <Modal
          size="lg"
          show={open}
          onHide={() => setopen(false)}
          animation={false}
          backdropStyle={modalStyles.backdrop}
        >
          <Modal.Body style={{ backgroundColor: "none" }}>
            {/* <embed type="application/x-google-chrome-pdf" src={pdfUrl} original-url={pdfUrl} background-color="4283586137" javascript="allow"/> */}
            <iframe
              src={pdfUrl}
              style={{ width: "100%", height: "600px", border: "none" }}
            ></iframe>
          </Modal.Body>
          <style>
            {`
              .modal-dialog {
                ${modalStyles.modalDialog}
              }
            `}
          </style>
        </Modal>
      </div>
    </>
  );
}

export default Example;
