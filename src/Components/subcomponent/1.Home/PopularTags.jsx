const PopularTags = ({ popularTags, handleCategories }) => {
  return (
    <>
      <div className="container max-w-[100%] mb-[40px] min-h-[220px] mt-[20px]">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] min-h-full mx-auto ">
          <p className="text-[24px] font-[700] py-[20px] pb-[15px]">
            Popular Tags
          </p>
          <div className="grow h-[1px] bg-[#dddddd]"></div>

          <div className="pt-[5px]">
            {popularTags.length === 0 ? (
              <div className="w-full mt-[20px] text-[19px] font-[500] flex items-center justify-center">
                <p>No items present</p>
              </div>
            ) : (
              popularTags.map((item, index) => (
                <button
                  onClick={() => handleCategories(item)}
                  style={{
                    fontFamily: "Archivo, sans-serif",
                  }}
                  className="bg-white px-[10px] py-[8px] rounded-md mx-[10px] my-[10px] text-[15px] font-[500] border-[1px] border-gray-300 hover:scale-105 transition ease duration-300 hover:shadow-[0px_0px_15px_1px_rgba(0,0,0,0.2)] hover:text-blue-500 hover:underline cursor-pointer "
                  key={index}
                >
                  {item}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularTags;
