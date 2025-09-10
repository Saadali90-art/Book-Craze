const removeItem = async (link, data) => {
  let reqopt = {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqopt
  );

  let response = await result.json();
  return response.message;
};

export default removeItem;
