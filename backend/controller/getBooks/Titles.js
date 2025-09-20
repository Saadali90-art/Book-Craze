import Publish from "../../Model/PublishModel.js";

const Titles = async (req, res) => {
  try {
    let result = await Publish.find({});
    result = result.map((item) => item.title);
    res.status(200).send(result);
  } catch (error) {
    res.send(400).send("Titles Not Finded");
  }
};

export default Titles;
