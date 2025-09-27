const Marquee = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      className="bg-[#222] text-white p-[5px] fixed top-0 z-[20]"
    >
      <a href="https://github.com/Saadali90-art/Book-Craze">
        ⚡ This site is running on dummy data. Backend code is available on
        GitHub for full functionality. Click here to see Full-Stack Code.
      </a>
    </marquee>
  );
};

export default Marquee;
