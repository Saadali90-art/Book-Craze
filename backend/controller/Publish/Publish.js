import Publish from "../../Model/PublishModel.js";
import jsonwebtoken from "jsonwebtoken";

const PublishOne = async (req, res) => {
  try {
    const { title, category, gender, description, price } = req.body;
    const token = req.headers.tokenuser;

    // verify user
    const tokeninfo = await jsonwebtoken.verify(token, process.env.secretkey);

    // uploaded image path
    let fileimage = null;
    if (req.file) {
      fileimage = `/uploads/bookImage/${req.file.filename}`;
    }

    // validation
    if (
      !title ||
      !category ||
      !gender ||
      !description ||
      !price ||
      !fileimage
    ) {
      return res.status(400).json({ message: "Data Not Present" });
    }

    let data = {
      userId: tokeninfo.userId,
      title,
      category,
      gender,
      description,
      price,
      bookImage: fileimage,
    };

    // save to db
    await Publish.insertOne(data);
    res.status(200).json({
      message: "Book published successfully",
    });
  } catch (error) {
    console.log("Error While Saving Book:", error.message);
    res.status(500).json({ message: "Error while saving book" });
  }
};

export default PublishOne;
