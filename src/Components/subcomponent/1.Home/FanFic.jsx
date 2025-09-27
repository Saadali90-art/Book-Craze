const FanFic = ({ fanficTags, handleCategories }) => {
  return (
    <>
      {/* ================= RESPONSIBLE FOR GIVING CATEGORY TO CATEGORY PAGE ========================= */}

      <div className="container max-w-[100%] mb-[20px] min-h-[220px] mt-[20px] ">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] min-h-full mx-auto ">
          <p className="text-[24px] font-[700] py-[20px] pb-[15px]">
            Top Fanfic Tags
          </p>
          <div className="grow h-[1px] bg-[#dddddd]"></div>

          <div className="pt-[5px]">
            {fanficTags.map((item, index) => (
              <button
                onClick={() => handleCategories(item)}
                key={index}
                style={{
                  fontFamily: "Archivo, sans-serif",
                }}
                className="bg-white px-[10px] py-[8px] rounded-md mx-[10px] my-[10px] text-[15px] font-[500] border-[1px] border-gray-300 hover:scale-105 transition ease duration-300 hover:shadow-[0px_0px_15px_1px_rgba(0,0,0,0.2)] hover:text-blue-500 hover:underline cursor-pointer "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FanFic;
