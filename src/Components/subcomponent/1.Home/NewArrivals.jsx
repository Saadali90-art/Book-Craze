import Cards from "./subHome/Cards";

const NewArrivals = ({ handlemore, newArrival }) => {
  return (
    <>
      <div className="container max-w-[100%] bg-[#e6e5e5] min-h-[420px] mt-[20px]">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] relative mx-auto ">
          <h1 className="text-[24px] font-[700] py-[20px]">New Arrivals</h1>

          <div className="flex min-h-[320px]  flex-wrap justify-evenly gap-x-[10px] gap-y-[15px] pb-[20px]">
            {newArrival.length === 0 ? (
              <div className="w-full text-[19px] font-[500] flex items-center justify-center">
                <p>No items present</p>
              </div>
            ) : (
              newArrival.map((item, index) => (
                <Cards
                  handlemore={handlemore}
                  item={item}
                  index={index}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
