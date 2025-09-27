const TopBooks = async (link) => {
  let reqopt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqopt
    );
    let response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default TopBooks;
