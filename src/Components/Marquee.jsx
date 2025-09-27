const Marquee = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      className="bg-[#222] text-white p-[5px] fixed top-0 z-[20] outline-none"
    >
      <a href="https://github.com/Saadali90-art/Book-Craze">
        ⚡ This site currently uses sample data. The complete backend
        implementation is available on GitHub. Click here to see.
      </a>
    </marquee>
  );
};

export default Marquee;
