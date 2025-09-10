const SignInData = async (link) => {
  let token = localStorage.getItem("tokenuserin");

  if (token) {
    let reqOpt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };

    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqOpt
    );
    let response = await result.json();

    return response.message;
  } else {
    return null;
  }
};

export default SignInData;
