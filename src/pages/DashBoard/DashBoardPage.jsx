import React, { useState } from 'react';
import './DashBoardPage.css'; // Importing CSS file for styling

function DashBoardPage() {
  const [pdfs, setPdfs] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const fetchPdfs = () => {
    // Simulating fetching PDFs from the server
    const dummyPdfs = [
      { id: 1, name: 'SamplePDF1.pdf' },
      { id: 2, name: 'SamplePDF2.pdf' },
      { id: 3, name: 'SamplePDF3.pdf' }
    ];
    return Promise.resolve(dummyPdfs);
  };

  const uploadPdf = (file) => {
    // Simulating uploading a PDF file
    setUploading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUploading(false);
        resolve('PDF uploaded successfully');
      }, 2000); // Simulating a delay of 2 seconds
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Assuming the file object contains the necessary data (e.g., name)
    uploadPdf(file)
      .then(() => {
        // After successful upload, fetch the updated list of PDFs
        return fetchPdfs();
      })
      .then((newPdfs) => {
        setPdfs(newPdfs);
      })
      .catch((error) => {
        setError('Error uploading PDF: ' + error.message);
      });
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">PDFs List</h2>
      <ul className="pdf-list">
        {pdfs.map((pdf) => (
          <li key={pdf.id}>{pdf.name}</li>
        ))}
      </ul>
      <div className="upload-section">
        <h2>Upload PDF</h2>
        <input type="file" onChange={handleFileChange} />
        {uploading && <div>Uploading...</div>}
        {error && <div className="error-message">Error: {error}</div>}
      </div>
    </div>
  );
}

export default DashBoardPage;
