const sendData = async (data, link, seterrorobj, navigate) => {
  let infodata = JSON.stringify(data);

  let reqOpt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: infodata,
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );

  let response = await result.json();

  if (!result.ok) {
    seterrorobj((pre) => {
      return [response, ...pre];
    });
  } else {
    localStorage.setItem("tokenuserin", response.token);
    if (response.message === "Data Sended TO DB") {
      navigate("/");
    }
  }
};

export default sendData;
