const MoreDetail = async (data, link) => {
  let reqopt = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  let result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${link}`,
    reqopt
  );
  let response = await result.json();
  return response;
};

export default MoreDetail;
