import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation";
import MoreDetail from "./Requests/MoreDetails/More.js";

const Categories = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  // ========================= FETCHING DATA FROM DB ======================

  useEffect(() => {
    const fetchData = async (data, link) => {
      let response = await MoreDetail(data, link);
      setCategoryData(
        [...response].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    };

    fetchData({ category: id }, "book/category");
  }, []);

  // ================== POPULAR DATA WITH MOST VIEWS =====================

  const handlePopular = () => {
    setSelected(1);
    setCategoryData(categoryData.sort((a, b) => b.views - a.views));
  };

  // ========================== NEW DATA ========================

  const handleNew = () => {
    setSelected(0);
    setCategoryData(
      [...categoryData].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  return (
    <main className="w-full">
      <Navigation />

      <div className="w-full h-[130px] max-[813px]:h-[114px] bg-gray-200 mt-[70px] max-[813px]:mt-[50px] mb-[20px] relative">
        {/* ======================== TOP SECTION OF CATEGORIES INFO ======================== */}

        <h1
          style={{ fontFamily: "Archivo, sans-serif" }}
          className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto text-[30px] max-[813px]:text-[25px] font-[600] py-[10px] pb-[34px]"
        >
          {id}
        </h1>

        <div
          style={{ fontFamily: "Archivo, sans-serif" }}
          className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto text-[23px] max-[813px]:text-[15px] font-[500] flex flex-row gap-x-[20px] "
        >
          <button
            className="cursor-pointer"
            onClick={() => handleNew()}
            style={{
              textDecoration: selected === 0 ? "underline" : "none",
              textDecorationColor: selected === 0 && "blue",
              textUnderlineOffset: "15px",
            }}
          >
            New
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handlePopular()}
            style={{
              textDecoration: selected === 1 ? "underline" : "none",
              textDecorationColor: selected === 1 && "blue",
              textUnderlineOffset: "15px",
            }}
          >
            Popular
          </button>
        </div>
      </div>

      {/* ======================== CARDS SECTION ========================== */}

      <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto mb-[30px]">
        <div className="w-full min-h-[200px] ">
          {categoryData.length <= 0 ? (
            // ===================== IF NO DATA IS FOUND ==================================

            <div className="w-full min-h-[200px] flex items-center justify-center">
              <p className="text-[17px] font-[600]">No Items Found</p>
            </div>
          ) : (
            // =================================== IF DATA IS PRESENT ==========================

            <div className="flex flex-wrap gap-x-[15px] gap-y-[20px]  max-[937px]:justify-center">
              {categoryData.map((item, index) => (
                <div
                  className="w-[49%] max-[937px]:w-[100%] h-[160px] flex gap-x-[10px] cursor-pointer"
                  key={index}
                  onClick={() =>
                    navigate("/user/dashboard/more", {
                      state: item,
                    })
                  }
                >
                  <div className="w-[30%] min-w-[130px] max-[439px]:min-w-[120px] max-[505px]:min-w-[110px] max-[937px]:w-[20%] max-[662px]:w-[25%] max-[542px]:min-w-[30%] max-[453px]:min-w-[35%] max-[375px]:min-w-[40%] h-full rounded-lg overflow-hidden">
                    <img
                      src={`http://127.0.0.1:8000${item.bookImage}`}
                      alt=""
                      className="w-full h-full  hover:scale-105 transition ease duration-250 "
                    />
                  </div>

                  <div
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="py-[5px] w-[70%] min-w-[400px] max-[1639px]:min-w-[300px] max-[1332px]:min-w-[200px] max-[453px]:min-w-[65%] max-[375px]:min-w-[60%]"
                  >
                    <div className="w-[98%] ">
                      <p className="text-[17px] pb-[5px] font-[600] truncate">
                        {item.title}
                      </p>

                      <p className="text-orange-500 text-[17px] font-[600]">
                        $ {item.price}
                      </p>
                      <p
                        className="text-[16px] font-[400] max-[480px]:text-left max-[552px]:pr-[5px]"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Categories;
