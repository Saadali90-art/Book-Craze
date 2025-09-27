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

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqOpt
    );

    if (result.ok) {
      let response = await result.json();
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;
