const specificBooks = async (link) => {
  let token = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "GET",
    headers: { "Content-Type": "text/json", tokenuser: token },
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqOpt
    );
    let response = await result.json();

    if (response.message === "Data Not Present") {
      return response.message;
    } else {
      return response.message.sort((a, b) => b.views - a.views);
    }
  } catch (error) {
    console.log(error);
  }
};

export default specificBooks;
