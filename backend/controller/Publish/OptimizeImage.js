import sharp from "sharp";
import fs from "fs";

const optimizeImage = async (req, res, next) => {
  if (!req.file || req.file.fieldname !== "bookImage") {
    return next();
  }

  try {
    const inputPath = req.file.path;
    const tempPath = inputPath + ".tmp"; // temporary file

    // Get original format (jpeg, png, etc.)
    const metadata = await sharp(inputPath).metadata();

    // Create optimized copy
    await sharp(inputPath)
      .resize(400, 300, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .toFormat(metadata.format, { quality: 90 })
      .toFile(tempPath);

    // Delete the old file
    fs.unlinkSync(inputPath);

    // Rename new file to original name
    fs.renameSync(tempPath, inputPath);

    next();
  } catch (err) {
    console.error("Book image optimization failed:", err);
    next();
  }
};

export default optimizeImage;
