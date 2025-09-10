const TopBooks = async (link) => {
  let reqopt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqopt
  );
  let response = await result.json();
  return response;
};

export default TopBooks;
