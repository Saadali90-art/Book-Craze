import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import write from "../../../../assets/Writing/write.svg";

const Practices = ({ current, setcurrent, item, index }) => {
  return (
    <>
      <div
        style={{
          height: current === index ? "110px" : "44px",
          transition: "height 300ms ease",
        }}
        className="overflow-hidden "
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-x-[10px]">
            <img src={write} className="w-[20px] h-[20px]" alt="" />
            <h1 className="text-[16px] font-[600] py-[10px] ">
              {item.heading}
            </h1>
          </div>

          <button
            className="text-[16px] cursor-pointer"
            onClick={() => {
              if (current === index) {
                setcurrent(null);
              } else {
                setcurrent(index);
              }
            }}
          >
            <ChevronDown size={23} />
          </button>
        </div>

        <p
          style={{ fontFamily: "Archivo, sans-serif" }}
          className="text-[15px] font-[400] pb-[10px]"
        >
          {item.text}
        </p>
      </div>
    </>
  );
};

export default Practices;
