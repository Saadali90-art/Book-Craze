import bgimg from "../../../assets/Login/bgimg.jpg";
import Search from "lucide-react/dist/esm/icons/search";

const Navigation = ({ setSearch, search }) => {
  return (
    <>
      <nav className="container w-[70%] max-[1170px]:w-[80%] max-[924px]:w-[90%] h-[70px] max-[457px]:h-[60px] mx-auto flex justify-between items-center ">
        <h1
          className="font-[700] text-[30px] max-[457px]:text-[20px] text-transparent bg-clip-text  bg-cover py-[12px]"
          style={{
            fontFamily: "Playfair Display SC, sans-serif",
            backgroundImage: `url(${bgimg})`,
            animation: "mover 8s ease infinite",
          }}
        >
          Book Craze
        </h1>

        <div className="w-[210px] max-[571px]:w-[180px] max-[365px]:w-[140px] rounded-[30px] px-[5px] max-[457px]:py-[0px] py-[3px] flex items-center gap-x-[5px]  bg-[#f1f1f1] ">
          <Search
            className="w-[20px] h-[20px] max-[457px]:w-[17px] max-[457px]:h-[17px] ml-[5px] max-[319px]:ml-[0px]"
            color="#545454"
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search Items.."
            className=" rounded-[30px] w-[160px] max-[571px]:w-[140px] max-[365px]:w-[100px] px-[5px] py-[3px] outline-none"
          />
        </div>
      </nav>

      <div className="grow h-[2px] bg-gray-200"></div>
    </>
  );
};

export default Navigation;
