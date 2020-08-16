import http from "../../http-common";

const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);
    console.log(file)
    return http.post(`/izzifile/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    return http.get("/izzifile/files");
};

export default {
    upload,
    getFiles,
};