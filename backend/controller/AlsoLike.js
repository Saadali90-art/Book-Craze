import Publish from "../Model/PublishModel.js";

const alsolike = async (req, res) => {
  let { category } = req.body;

  try {
    let result = await Publish.find({ category: category });

    res.status(200).json({ message: result });
  } catch (error) {
    console.log(error.message);
  }
};

export default alsolike;
