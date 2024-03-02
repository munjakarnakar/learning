const JSZip = require("jszip");
const fs = require("fs");
const path = require("path");

const compressSingleFile = (filePath, zipName) => {
    const zip = new JSZip();

    const fileContent = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);
    console.log('fileName', fileName);
    const stats = fs.statSync(fileName);
    console.log(stats)
    const fileSizeInBytes = stats.size;

    console.log('Size in bytes:', fileSizeInBytes, (fileSizeInBytes / (1024*1024)));


    zip.file(fileName, fileContent);

    const zipFileName = `${zipName}.zip`;

    zip.generateAsync({ type: "nodebuffer" })
        .then((content) => {
            fs.writeFileSync(zipFileName, content);
        })
        .catch((error) => console.log(error));

    console.log(`Zip file created: ${zipFileName}`);
};

// Usage:
compressSingleFile("./Bagging_Life_Cycle_Report_2024-02-19.xlsx", "myfile-compressed");