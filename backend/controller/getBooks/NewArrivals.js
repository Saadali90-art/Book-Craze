import Publish from "../../Model/PublishModel.js";

const newArrivals = async (req, res) => {
  try {
    let data = await Publish.find({});
    res.status(200).send(data);
  } catch (error) {
    console.log(error);

    res.status(400).send("Error While Sorting the Data");
  }
};

export default newArrivals;
