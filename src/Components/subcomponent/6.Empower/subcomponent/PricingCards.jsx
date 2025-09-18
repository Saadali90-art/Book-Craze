import checkmark from "../../../../assets/Mission/checkmark.svg";
import checkWhite from "../../../../assets/Mission/checkWhite.svg";
import background from "../../../../assets/Mission/background.png";

const PricingCards = ({ item, index, handleSubsribe }) => {
  return (
    <div
      className="min-w-[350px] max-[417px]:min-w-[300px] max-[325px]:min-w-[280px] min-h-[500px] rounded-2xl flex flex-col mx-auto shadow-[0px_0px_33px_5px_rgba(0,0,0,0.2)]"
      style={{
        background: index === 0 ? "white" : `url(${background})`,
        fontFamily: "Archivo, sans-serif",
      }}
    >
      {/* ============= TITLE  */}

      <p
        className="text-[28px] font-[600] mx-auto pt-[18px] pb-[15px]"
        style={{ color: index === 1 ? "white" : "#262626" }}
      >
        {item.title}
      </p>

      {/* =========== SUBTEXT  */}

      <p
        className="text-[13px] mx-auto pb-[15px] max-[417px]:text-[12px] px-[10px] text-center"
        style={{ color: index === 1 ? "white" : "#262626" }}
      >
        {item.subtext}
      </p>

      {/* ============= PRICE  */}

      <p
        className="text-[28px] font-[600] mx-auto pb-[15px]"
        style={{ color: index === 1 ? "white" : "#262626" }}
      >
        {item.price}
      </p>

      {/* =========== GET BUTTON  */}

      <button
        onClick={() => handleSubsribe(item.priceId)}
        className="w-[80%] py-[10px] mx-auto rounded-lg font-[700] active:brightness-75 cursor-pointer"
        style={{
          background: index === 1 ? "white" : `url(${background})`,
          color: index === 0 ? "white" : "#22C0D9",
        }}
      >
        Get Started
      </button>

      {/* ============ ADVANTAGES WITH DIFERENT CHECKED TICKS  */}

      <div className="mt-[20px]">
        {item.advantages.map((items, i) => (
          <div key={i} className="w-[80%] flex items-center ">
            {index === 0 ? (
              <div className="flex  gap-x-[10px] px-[20px]">
                <img src={checkmark} alt="" className="w-[20px] h-[20px]" />
                <p
                  className="text-[13px] pb-[15px] "
                  style={{ color: index === 1 ? "white" : "#262626" }}
                >
                  {items}
                </p>
              </div>
            ) : (
              <div className="flex  gap-x-[10px] px-[20px]">
                <img src={checkWhite} alt="" className="w-[20px] h-[20px]" />
                <p
                  className="text-[13px] pb-[20px] "
                  style={{ color: index === 1 ? "white" : "#262626" }}
                >
                  {items}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
