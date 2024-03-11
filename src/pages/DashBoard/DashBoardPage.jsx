import React, { useState } from 'react';
import './DashBoardPage.css'; // Importing CSS file for styling
import FilePicker from '../../services/fileUpload';

function DashBoardPage() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const files = document.querySelector(".single").files;
      const result = await FilePicker(files, index, link);
      console.log(result, 'result');
      document.querySelector(".single").value = null;
    } catch (error) {
      setError(error.message);
    }
  };


  const [pdfs, setPdfs] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [index, setIndex] = useState('');
  const [link, setLink] = useState('');
  const [path, setPath] = useState('');





  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">PDFs List</h2>
      <ul className="pdf-list">
        {pdfs.map((pdf) => (
          <li key={pdf.id}>{pdf.name}</li>
        ))}
      </ul>
      <div className="upload-section">
      <form onSubmit={handleSubmit} className="upload-section">
        <h2>Upload PDF</h2>
        <input type="file" className='single' />
        <input type="text" value={index} onChange={(e)=>setIndex(e.target.value)} placeholder="Index" />
        <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="Link" />
        <input type="text" value={path} onChange={(e)=>setPath(e.target.value)} placeholder="path" />

        <button type="submit">Submit</button>
        {uploading && <div>Uploading...</div>}
        {error && <div className="error-message">Error: {error}</div>}
      </form>
      </div>
    </div>
  );
}

export default DashBoardPage;
