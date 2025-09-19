export const handleDownload = (pdf) => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

