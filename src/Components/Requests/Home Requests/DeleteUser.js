const deleteUser = async (link, userpass) => {
  let token = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(userpass),
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );

  if (result.ok) {
    let response = await result.json();
    return response.message;
  }
};

export default deleteUser;
