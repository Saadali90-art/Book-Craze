const Cards = ({ index, handlemore, item }) => {
  return (
    <div
      key={index}
      className="flex flex-col flex-wrap justify-center items-center gap-x-[100px] w-[220px] max-[1947px]:w-[200px] max-[1797px]:w-[180px] max-[1613px]:w-[160px] max-[1432px]:w-[145px] h-[300px] "
    >
      <div
        onClick={() => handlemore(item)}
        className="w-full h-[210px] overflow-hidden rounded-md cursor-pointer "
      >
        <img
          loading="lazy"
          width={160}
          src={item.bookImage}
          className="w-full  h-[230px] hover:scale-105 transition-all duration-500 ease"
        />
      </div>

      <div className="flex flex-col w-full">
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
          className="text-[15px] font-[600]  pt-[10px] w-full h-[60px] max-[526px]:h-[53px] max-[368px]:text-[10px] max-[368px]:h-[42px] "
        >
          {item.title}
        </p>
        <p className="text-[13px] text-gray-600 max-[526px]:mt-[10px]">
          {item.category}
        </p>
      </div>
    </div>
  );
};

export default Cards;
