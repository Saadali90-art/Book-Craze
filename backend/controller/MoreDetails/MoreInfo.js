import Publish from "../../Model/PublishModel.js";

const moreInfo = async (req, res) => {
  let id = req.body;

  try {
    let result = await Publish.findOne({ _id: id.id });

    await Publish.updateOne(
      { _id: result.id },
      { $set: { views: result.views + 1 } }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(404).send("Issue While Sending More Info");
  }
};

export default moreInfo;
