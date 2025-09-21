import multer from "multer";
import path from "path";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../controller/cloudinaryConfig.js";

// ======== CLOUDINARY STORAGE CONFIG ===========
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "uploads"; // main uploads folder
    let public_id;

    if (file.fieldname === "bookImage") {
      folder += "/bookImage";
      public_id = `${Date.now()}-${path.parse(file.originalname).name}`;
    } else if (file.fieldname === "coverImage") {
      folder += `/users/${req.body.name}`;
      public_id = "cover";
    } else if (file.fieldname === "profileImage") {
      folder += `/users/${req.body.name}`;
      public_id = "profile";
    } else {
      folder += `/users/${req.body.name}`;
      public_id = "profile";
    }

    return {
      folder: folder,
      public_id: public_id,
      format: "webp", // convert all images to WebP
      overwrite: true, // overwrite if same public_id exists
    };
  },
});

const upload = multer({ storage });

export default upload;
