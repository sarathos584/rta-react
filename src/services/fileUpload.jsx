import { ApiCall } from "../services/ApiCall";

export default async function FilePicker(files, index, link, paṭh) {
  return new Promise(async (resolve, reject) => {
    try {
      const uploadedFiles = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        filename: file.name,
        metadata: { name: file.name },
      }));

      const formData = new FormData();
      for (const file of files) {
        formData.append("file", file);
      }
      formData.append("index", index);
      formData.append("link", link);
      formData.append("name", paṭh);

      const apiResponse = await ApiCall(
        "post",
        "/api/v1/code/admin/add/file",
        formData,
        null,
        "multipart/form-data"
      );

      if (apiResponse.status) {
        const pdfUrl = apiResponse?.message?.data;
        resolve(pdfUrl);
      } else {
        resolve(null);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
