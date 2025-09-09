import React, { useContext, useEffect, useState } from "react";
import TopBooks from "../../Requests/Home Requests/TopBooks.js";
import Cards from "./subHome/Cards.jsx";
import SmallCards from "./subHome/SmallCards.jsx";

const TopPicks = ({ handlemore }) => {
  const [monthlyPicks, setMonthlyPicks] = useState([]);

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await TopBooks(link);
      setMonthlyPicks(data);
    };

    fetchData("monthlypicks");
  }, []);

  return (
    <>
      <div className="container max-w-screen pb-[20px] bg-[#e6e6e6] mt-[20px]">
        <div
          className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] 
         mx-auto"
        >
          <h1 className="text-[24px] font-[700] py-[20px] ">
            Monthly Spotlight
          </h1>

          <div className="w-full flex flex-wrap gap-x-[10px] gap-y-[20px] justify-evenly ">
            {monthlyPicks.map((item, index) => (
              <SmallCards
                item={item}
                index={index}
                key={index}
                handlemore={handlemore}
              />
            ))}
          </div>

          <div className="flex flex-row justify-between mx-auto  mt-[20px] "></div>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
