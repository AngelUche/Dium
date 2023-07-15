const multer = require("multer");

// Set storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "product-image/"); // Specify the directory where you want to store the uploaded files
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

// Configure multer with the storage
const upload = multer({ storage });

module.exports = upload;
