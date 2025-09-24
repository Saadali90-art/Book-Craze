const cartsData = async (link, dataobj) => {
  let token = localStorage.getItem("tokenuserin");

  let reqopt = {
    method: "POST",
    body: JSON.stringify(dataobj),
    headers: { "Content-Type": "application/json", tokeninfo: token },
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqopt
    );
    if (result.ok) {
      let response = await result.json();
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export default cartsData;
