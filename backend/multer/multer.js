import multer from "multer";
import path from "path";
import fs, { existsSync, rmdir, rmdirSync } from "fs";

// ======== DELETES THE PREVIOUS FILES ================

const clearFiles = (folder, fileName) => {
  if (!fs.existsSync(folder)) return;

  let files = fs.readdirSync(folder);

  for (let eachfile of files) {
    let parseName = path.parse(eachfile);
    if (parseName.name === fileName) {
      fs.unlinkSync(path.join(folder, eachfile));
    }
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/";
    let name = req.body.name;

    if (file.fieldname === "bookImage") {
      folder = "uploads/bookImage/";
    } else {
      folder = path.join("uploads", name);

      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
    }

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let fileInfo;
    let extname = path.extname(file.originalname);

    // === if the file is coverimage then first create the name and then run the function to delete the previous function

    if (file.fieldname === "coverImage") {
      let folder = path.join("uploads", req.body.name);
      fileInfo = "cover" + extname;
      clearFiles(folder, path.parse(fileInfo).name);
    } else if (file.fieldname === "profileImage") {
      let folder = path.join("uploads", req.body.name);
      fileInfo = "profile" + extname;
      clearFiles(folder, path.parse(fileInfo).name);
    } else if (file.fieldname === "bookImage") {
      fileInfo = Date.now() + path.extname(file.originalname);
    } else {
      fileInfo = "profile" + extname;
    }

    cb(null, fileInfo);
  },
});

const upload = multer({ storage });

export default upload;
