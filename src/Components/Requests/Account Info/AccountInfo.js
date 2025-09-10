const accountData = async (link, dataobj) => {
  let token = localStorage.getItem("tokenuserin");

  let reqopt = {
    method: "POST",
    body: dataobj,
    headers: { tokeninfo: token },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqopt
  );
  let response = await result.json();
  return response;
};

export default accountData;
