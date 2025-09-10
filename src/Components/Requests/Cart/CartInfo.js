const cartsData = async (link, dataobj) => {
  let token = localStorage.getItem("tokenuserin");

  let reqopt = {
    method: "POST",
    body: JSON.stringify(dataobj),
    headers: { "Content-Type": "application/json", tokeninfo: token },
  };
  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqopt
  );
  if (result.ok) {
    let response = await result.json();
    return response;
  }
};

export default cartsData;
