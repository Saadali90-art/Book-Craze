import { useEffect, useState } from "react";
import Search from "lucide-react/dist/esm/icons/search";
import X from "lucide-react/dist/esm/icons/x";
import { useNavigate, useParams } from "react-router-dom";
import newBooks from "./Requests/Home Requests/NewBooks.js";
import DataCards from "./subcomponent/4.Dashboard/DataCards.jsx";

const SearchedData = () => {
  const { id } = useParams();
  const [search, setSearch] = useState(id || "");
  const [searchData, setSearchData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (link) => {
      try {
        let data = await newBooks(link);
        setTotalData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData("book/searches");
  }, []);

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearchData(
      totalData.filter((item) =>
        item.title.toLowerCase().includes(search?.toLowerCase())
      )
    );
  }, [totalData, search]);

  return (
    <main className="w-full pb-[20px]">
      <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] flex h-[70px] justify-center  items-center mx-auto ">
        <div className="flex items-center w-full bg-gray-200 rounded-2xl px-[10px] py-[4px] ">
          <Search className="w-[20px] h-[20px]" />
          <input
            type="text"
            value={search}
            onChange={handlechange}
            placeholder="Search.."
            className="w-full h-[30px] px-[10px] py-[6px] text-[15px] outline-none  "
          />
          <button
            onClick={() => setSearch("")}
            className="w-[30px] h-[30px] rounded-[50%] cursor-pointer flex items-center justify-center "
          >
            <X className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
      <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>

      {/* ==================== SEARCHED DATA ========================= */}

      <div className="mt-[20px] container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto ">
        <p className="text-[15px] font-[500] py-[10px]">
          Number Of Matches : {searchData.length}
        </p>
        <div className="w-full flex justify-center flex-wrap gap-x-[20px] gap-y-[10px] select-none">
          {searchData.length <= 0 ? (
            <div className="w-full h-[200px] flex items-center justify-center">
              <p className="text-[17px] font-[600]">No Items Found</p>
            </div>
          ) : (
            searchData.map((item, index) => (
              <DataCards
                item={item}
                index={index}
                key={index}
                navigate={navigate}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchedData;
