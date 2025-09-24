const discoveritems = async (link) => {
  let reqopt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  try {
    let result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}${link}`,
      reqopt
    );
    let response = await result.json();
    response = response.sort((a, b) => b.views - a.views);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default discoveritems;
