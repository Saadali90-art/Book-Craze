import Publish from "../../Model/PublishModel.js";

const weeklyTop = async (req, res) => {
  let now = new Date();

  let lastweek = new Date();
  lastweek.setDate(now.getDate() - 7);

  try {
    let result = await Publish.find({ date: { $gte: lastweek } })
      .sort({
        views: -1,
      })
      .limit(6);

    if (result.length < 4) {
      result = await Publish.find({}).sort({ views: -1 }).limit(6);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Can Not Find Data From Weekly Top");
  }
};

export default weeklyTop;
