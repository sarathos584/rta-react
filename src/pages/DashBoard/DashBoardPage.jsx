import React, { useState } from 'react';
import './DashBoardPage.css'; // Importing CSS file for styling
import FilePicker from '../../services/fileUpload';

function DashBoardPage() {



  async function uploadFiles(event) {
    const files = event.target.files;
console.log(files,'files')
    // const files = document.querySelector(".single").files;
    const result = await FilePicker(files);
    console.log(result,'result')
    document.querySelector(".single").value = null;
  }



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
        <input type="file" onChange={uploadFiles} className='single' />
        {uploading && <div>Uploading...</div>}
        {error && <div className="error-message">Error: {error}</div>}
      </div>
    </div>
  );
}

export default DashBoardPage;
