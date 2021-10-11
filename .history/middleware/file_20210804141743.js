const multer = require("multer");

const storage = multer.diskStorage({
  destination() {
    cb(null, "images");
  },
  filename() {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
    if(){
        cd(null, true)
    } else {
        cd(err, false)
    }
};

module.exports = multer({
  storage,
  fileFilter,
});