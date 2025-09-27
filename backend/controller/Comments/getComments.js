import Comment from "../../Model/UsersComments.js";

const getComments = async (req, res) => {
  let title = req.body;

  try {
    let result = await Comment.find({ title: title.title });
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Data not Found");
  }
};

export default getComments;
