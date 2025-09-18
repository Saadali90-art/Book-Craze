import { useNavigate } from "react-router-dom";
import DataCards from "./DataCards";

const DashboardCards = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-center flex-wrap gap-x-[20px] gap-y-[10px] select-none">
        {userData.map((item, index) => (
          <DataCards
            item={item}
            index={index}
            key={index}
            navigate={navigate}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
