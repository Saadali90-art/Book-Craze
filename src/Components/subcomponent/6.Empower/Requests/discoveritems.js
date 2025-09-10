const discoveritems = async (link) => {
  let reqopt = {
    method: "GET",
    headers: { "Content-Type": "text/json" },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqopt);
  let response = await result.json();
  response = response.sort((a, b) => b.views - a.views);

  return response;
};

export default discoveritems;
