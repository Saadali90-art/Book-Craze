const newBooks = async (link) => {
  let reqOpt = {
    method: "GET",
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );
  let response = await result.json();
  return response;
};

export default newBooks;
