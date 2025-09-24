const newBooks = async (link) => {
  let reqOpt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqOpt
    );
    let response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default newBooks;
