import { Link } from "react-router-dom";

const WebNovels = ({ data }) => {
  return (
    <div className=" w-[40%] max-[1943px]:w-[45%] max-[1832px]:w-[50%] max-[1657px]:w-[55%] max-[1502px]:w-[48%] max-[1335px]:w-[53%] max-[776px]:w-full max-[776px]:mt-[20px] ">
      <div className="w-full max-[1502px]:w-[100%] max-[776px]:w-full">
        <h1
          style={{ fontFamily: "Archivo, sans-serif" }}
          className="text-[24px] ml-[25px] max-[776px]:ml-[0px] py-[10px] font-[600] text-[#1c1c1c] border-b-[1.3px] border-[#d8d8d8] "
        >
          Empower Author
        </h1>
        <div className="max-[776px]:mb-[10px]">
          {data.map((item, index) => (
            <Link
              key={index}
              to={`/empowering/${encodeURIComponent(
                item.heading.toLowerCase()
              )}`}
            >
              <div className="flex max-[450px]:gap-x-[10px] justify-between w-[96%] max-[776px]:w-full border-b-[1.3px] border-[#d8d8d8] ml-[20px] max-[776px]:ml-[0px]  py-[13px] hover:backdrop-brightness-95 ">
                <div className=" w-[70%] max-[1346px]:w-[80%] max-[1098px]:w-[100%] max-[776px]:w-[68%]">
                  <h1 className="text-[17px] font-[600] max-[410px]:text-[16px] ">
                    {item.heading}
                  </h1>
                  <p className="text-[12px] text-[#4e4e4e] max-[1098px]:text-justify max-[410px]:text-left">
                    {item.description}
                  </p>
                </div>

                <div className=" w-[21%] max-[1098px]:hidden max-[776px]:block max-[572px]:w-[29%] max-[776px] max-[436px]:w-[31%]">
                  <img
                    src={item.img}
                    alt={`Image : ${index + 1}`}
                    className="w-full max-[1442px]:w-full h-[60px] max-[776px]:h-[70px] max-[469px]:h-[80px] max-[338px]:h-[85px] rounded-sm "
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebNovels;
