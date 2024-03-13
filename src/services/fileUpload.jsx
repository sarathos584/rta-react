import { ApiCall } from "../services/ApiCall";

export default async function FilePicker(files,index,link) {
    console.log(files,index,link,'files')
  return new Promise(async (resolve, reject) => {
    try {
      // Filter only PDF files
      const pdfFiles = Array.from(files).filter((file) =>
        file.type === "application/pdf"
      );

      if (pdfFiles.length === 0) {
        // showToast("Please select valid PDF files", false);
        resolve(null);
      }

      const uploadedFiles = pdfFiles.map((file) => ({
        url: URL.createObjectURL(file),
        filename: file.name,
        metadata: { name: file.name },
      }));

      const formData = new FormData();
      for (const file of pdfFiles) {
        formData.append("file", file);
      }
      formData.append("index", index);
      formData.append("link", 'link');
      formData.append("name", 'pdf');


      const apiResponse = await ApiCall(
        "post",
        "/api/v1/code/admin/add/file",
        formData,
        null,
        "multipart/form-data"
      );

      if (apiResponse.status) {
        console.log(apiResponse,'apiResponse')
        // Assuming the API response contains the URL of the uploaded PDF
        const pdfUrl = apiResponse?.message?.data;
        resolve(pdfUrl);
      } else {
        // showToast("The file size is too large", false);
        resolve(null);
      }
    } catch (error) {
        console.log(error)
      reject(error);
    }
  });
}
