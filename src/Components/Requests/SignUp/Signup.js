const sendData = async (data, link, seterrorobj, navigate, setLoad) => {
  let infodata = JSON.stringify(data);

  let reqOpt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: infodata,
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqOpt
    );

    let response = await result.json();

    if (response.message === "User Not Found") {
      navigate("/login");
    }

    if (!result.ok) {
      seterrorobj((pre) => {
        return [response, ...pre];
      });
    } else {
      setLoad(true);
      localStorage.setItem("tokenuserin", response.token);
      if (response.message === "Data Sended TO DB") {
        navigate("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendData;
