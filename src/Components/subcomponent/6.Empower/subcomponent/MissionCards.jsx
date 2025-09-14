const MissionCards = ({ item }) => {
  return (
    <div className="w-[49%] max-[1293px]:w-[99%] mx-auto">
      <div className="flex h-[120px] max-[515px]:h-[100px] ">
        <div className="min-w-[190px] max-[531px]:min-w-[150px] max-[395px]:min-w-[100px] max-[320px]:min-w-[90px]">
          <img
            loading="lazy"
            src={item.img}
            className="min-w-[190px] max-[531px]:min-w-[150px] max-[395px]:min-w-[100px] max-[320px]:min-w-[90px] h-full rounded-md"
          />
        </div>
        <div className="flex justify-center flex-col px-[15px] max-[325px]:pr-[0px] max-[325px]:pl-[7px]">
          <p className="text-[16px] font-[600] max-[515px]:text-[15px] max-[324px]:text-[14px]">
            {item.title}
          </p>
          <p className="text-[14px] max-[515px]:text-[12px] font-[400] text-black/90 ">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionCards;
