import X from "lucide-react/dist/esm/icons/x";
import Search from "lucide-react/dist/esm/icons/search";

import { useNavigate } from "react-router-dom";

const SearchData = ({
  search,
  searchInfo,
  handleSearch,
  handleSearchOff,
  suggestArr,
  suggestion,
  handleValue,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full absolute top-0 h-[70px]"
      style={{
        opacity: search ? 1 : 0,
        transform: search ? "translateX(0)" : "translateX(1350px)",
        transition: "transform 500ms ease, opacity 300ms ease",
      }}
    >
      <div className="flex items-center w-full h-full justify-center gap-x-[10px] relative">
        <div className="flex flex-col w-[600px] relative">
          <div className="flex items-center bg-gray-200 rounded-2xl px-[10px] py-[4px]">
            <Search className="w-[20px] h-[20px]" />
            <input
              type="text"
              value={searchInfo}
              placeholder="Search.."
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  navigate(`/search/${searchInfo}`);
                }
              }}
              className="w-full h-[30px] px-[10px] py-[6px] text-[15px] outline-none"
            />
            <button
              className="w-[30px] h-[30px] rounded-[50%] cursor-pointer flex items-center justify-center"
              onClick={handleSearchOff}
            >
              <X className="w-[20px] h-[20px]" />
            </button>
          </div>

          {suggestion && (
            <div className="absolute top-full left-0 w-full bg-white border-[2px] border-gray-200 rounded-md shadow-md mt-1 z-50">
              {suggestArr.length === 0 ? (
                <div className="w-full h-[80px] flex items-center justify-center">
                  <p className="text-black font-[500]">No Records Found</p>
                </div>
              ) : (
                <div>
                  {suggestArr.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm px-[10px] py-[8px] hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleValue(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
    </div>
  );
};

export default SearchData;
