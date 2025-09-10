import Publish from "../../Model/PublishModel.js";

const MontlyPicks = async (req, res) => {
  let now = new Date();

  let lastMonth = new Date();
  lastMonth.setMonth(now.getMonth() - 1);

  try {
    let result = await Publish.find({ date: { $gte: lastMonth } })
      .sort({ views: -1 })
      .limit(8);
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Data Not Founded According To Month");
  }
};

export default MontlyPicks;
