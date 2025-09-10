const deleteUser = async (setshowpop, link) => {
  let data = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", token: data },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );

  if (result.ok) {
    let response = await result.json();
    localStorage.removeItem("tokenuserin");
    location.reload();
    return setshowpop(false);
  }
};

export default deleteUser;
