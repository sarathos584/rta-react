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

  return (
    <>
      <Modal
        size="lg"
        show={open}
        onHide={() => setopen(false)}
        animation={false}>
        <Modal.Body>
          <iframe
            src={pdfUrl}
            style={{ width: "100%", height: "600px", border: "none" }}></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
