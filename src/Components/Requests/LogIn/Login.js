const LogDataSend = async (data, link, navigate, setlogerror, setLoad) => {
  let reqOpt = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqOpt
  );

  if (result.ok) {
    let response = await result.json();
    localStorage.setItem("tokenuserin", response.token);
    navigate("/");
  } else {
    setLoad(false);
    setlogerror(true);
    setTimeout(() => {
      setlogerror(false);
    }, 3000);
  }
};

export default LogDataSend;
