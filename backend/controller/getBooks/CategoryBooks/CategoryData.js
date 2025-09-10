import Publish from "../../../Model/PublishModel.js";

const CategoryData = async (req, res) => {
  let data = req.body;

  try {
    let result = await Publish.find({ category: data.category });
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Can Not Get Categorized Data");
  }
};

export default CategoryData;
