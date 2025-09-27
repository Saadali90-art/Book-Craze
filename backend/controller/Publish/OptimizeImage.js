// import sharp from "sharp";
// import fs from "fs";
// import path from "path";

// const optimizeImage = async (req, res, next) => {
//   if (!req.file || req.file.fieldname !== "bookImage") {
//     return next();
//   }

//   try {
//     const inputPath = req.file.path; // original upload path (e.g., uploads/image.jpg)
//     const extname = path.extname(inputPath).toLowerCase();
//     let outputPath = inputPath;

//     if (extname !== ".webp") {
//       outputPath = inputPath.replace(path.extname(inputPath), ".webp"); // new .webp path
//     }

//     // Convert to webp
//     await sharp(inputPath)
//       .resize(400, 300, {
//         fit: "inside",
//         withoutEnlargement: true,
//       })
//       .webp({ quality: 90 })
//       .toFile(outputPath);

//     // Delete old file
//     fs.unlinkSync(inputPath);

//     // Update multer file info (VERY IMPORTANT)
//     req.file.path = outputPath;
//     req.file.filename = path.basename(outputPath);
//     req.file.mimetype = "image/webp"; // now the server knows it's webp

//     next();
//   } catch (err) {
//     console.error("Book image optimization failed:", err);
//     next();
//   }
// };

// export default optimizeImage;
