const SmallCards = ({ index, item, handlemore }) => {
  return (
    <>
      <div
        key={index}
        className="w-[230px] max-[2043px]:w-[200px] max-[1786px]:w-[180px] h-[300px] relative overflow-hidden rounded-md "
        onClick={() => handlemore(item)}
      >
        <div className="w-full overflow-hidden rounded-sm">
          <img
            loading="eager"
            fetchPriority="high"
            src={`http://127.0.0.1:8000${item.bookImage}`}
            alt={index + 1}
            className="w-full h-[220px] rounded-sm hover:scale-110 transition-all duration-200 ease"
          />
        </div>

        <div className="w-full">
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              fontFamily: "Open Sans, sans-serif",
            }}
            className="w-full capitalize text-[14px] font-[600] py-[10px] h-[55px]"
          >
            {item.title}
          </p>
          <p className="text-[12px] text-gray-600 absolute bottom-[3px] ">
            {item.category}
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallCards;
//  max-[2163px]:w-[290px] max-[1963px]:w-[140px] max-[1702px]:w-[120px] max-[1474px]:w-[100px]
