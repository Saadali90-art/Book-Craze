const sendData = async (data, link, seterror, navigate, setLoad) => {
  let token = localStorage.getItem("tokenuserin");

  let reqOpt = {
    method: "POST",
    body: data,
    headers: { tokenuser: token },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );

  if (!result.ok) {
    setLoad(false);
    let response = await result.json();
    if (response.message === "Data Not Present") {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 4000);
    }
  } else {
    navigate("/user/dashboard");
  }
};

export default sendData;
