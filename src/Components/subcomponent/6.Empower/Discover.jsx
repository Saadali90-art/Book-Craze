import Navigation from "../1.Home/Navigation";
import discovering from "../../../assets/Discover/discover.png";
import Cards from "../1.Home/subHome/Cards.jsx";
import { useNavigate } from "react-router-dom";
import "../../../animation.css";
import JoinUs from "../../../assets/Discover/JoinUs.png";
import Footer from "../1.Home/Footer";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import dicoverBooks from "../../db/DicoverBooks.js";

const Discover = () => {
  let discover = dicoverBooks;
  const navigate = useNavigate();

  const handlemore = (item) => {
    if (item !== null) {
      navigate("/user/dashboard/more", { state: item._id });
    }
  };

  const handlejoin = () => {
    navigate("/signup");
  };

  return (
    <main className="min-h-[800px] ">
      {/* ====================== NAVIGATION SECTION ============================== */}

      <Navigation />

      <div className="w-full flex flex-col max-[420px]:flex-row max-[420px]:flex-wrap max-[420px]:overflow-x-hidden">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] relative mx-auto mt-[90px] max-[552px]:mt-[70px]">
          {/* ========================= BANNER SECTION ================================= */}

          <section className=" mx-auto flex justify-between h-[320px]  max-[590px]:flex-col ">
            <div className="flex flex-col  justify-center h-full max-[590px]:text-center  w-[60%] pr-[20px] max-[590px]:pb-[10px] max-[590px]:w-[99%] max-[590px]:text-white max-[590px]:pl-[18px]">
              <p
                style={{ fontFamily: "Libertinus Serif, serif" }}
                className="text-[40px]/[45px] font-[700] max-[590px]:text-[30px]/[35px] max-[590px]:font-[600]"
              >
                Discover Stories That Ignite Imagination
              </p>
              <p className=" text-sm pr-[50px] pt-[20px] max-[590px]:text-justify max-[580px]:text-[13px] max-[590px]:pr-[0px]  ">
                Dive into adventures where heroes rise, mysteries unfold, and
                dreams come alive because every story is more than words — it’s
                a gateway to endless wonder, a spark that fuels the imagination,
                and a journey that stays with you long after the final page.
              </p>
            </div>

            <div className="w-[40%] max-[590px]:w-[100%] h-full  max-[590px]:absolute flex justify-end -z-20 max-[590px]:brightness-60">
              <img
                loading="eager"
                fetchPriority="high"
                className="w-[380px] max-[777px]:w-[100%] h-full max-[590px]:h-[320px] rounded-md"
                src={discovering}
                alt=""
              />
            </div>
          </section>
        </div>

        {/* =========================== What You Will Discover ============================ */}

        <section className=" min-h-[405px] mt-[40px] mb-[20px] bg-gray-200">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto min-h-[350px] ">
            <p
              style={{ fontFamily: " Archivo, serif" }}
              className="text-[26px] font-[600] py-[20px]"
            >
              What You’ll Discover
            </p>

            <div className="flex flex-wrap justify-evenly gap-x-[10px] gap-y-[15px] max-[368px]:gap-y-[0px] pb-[20px] ">
              {discover.length === 0 ? (
                <div className="w-full h-[200px] mt-[20px] text-[19px] font-[500] flex items-center justify-center">
                  <p>No items present</p>
                </div>
              ) : (
                discover.map((item, index) => (
                  <Cards handlemore={handlemore} item={item} key={index} />
                ))
              )}
            </div>
          </div>
        </section>

        {/* ============================== EXPLORE ============================== */}

        <section className="w-full min-h-[405px] mt-[10]  ">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto min-h-[350px] mb-[50px] ">
            <p
              style={{ fontFamily: " Archivo, serif" }}
              className="text-[26px] font-[600] py-[20px]"
            >
              Timeless Magic of Books
            </p>
            <div
              className="text-justify"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              <p>
                Discovering a new book is like unlocking a hidden doorway — each
                page a spell, each chapter a realm waiting to be explored. The
                habit of reading transforms ordinary days into extraordinary
                journeys, where imagination becomes limitless and words turn
                into worlds.
              </p>

              <p className="pt-[7px]">Books hold a kind of quiet magic:</p>

              <ul className="list-disc pl-[19px] py-[7px]">
                <li>They whisper secrets of ancient kingdoms.</li>
                <li>They carry the wisdom of ages in their lines.</li>
                <li>They breathe life into forgotten legends.</li>
              </ul>

              <p className="py-[7px]">
                As Cicero once said, “A room without books is like a body
                without a soul.” And in the words of Emily Dickinson, “There is
                no frigate like a book to take us lands away.”
              </p>

              <p>
                Whether it’s a mystical tale that sparks wonder, or a historical
                novel that carries echoes of the past, every book offers a
                chance to step beyond the present moment. To read is not just to
                pass time — it is to travel through centuries, cultures, and
                dreams, guided only by the turning of a page.
              </p>
            </div>
          </div>
        </section>

        {/* =========================== ABOUT US ==================================== */}

        <section className="relative w-[100%] min-h-[250px]">
          <div className="w-full h-full absolute -z-10 bg-[url('https://t3.ftcdn.net/jpg/05/39/65/40/240_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg')] brightness-40 bg-center bg-no-repeat bg-cover"></div>
          <div className="container w-[70%] max-[1170px]:w-[80%] max-[924px]:w-[90%] mx-auto text-white pt-[5px] text-justify py-[20px]">
            <p
              style={{ fontFamily: " Archivo, serif" }}
              className="w-full mx-auto text-[26px] font-[500] py-[20px]"
            >
              About Us
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>
              Book Craze, launched to celebrate the joy of reading, is more than
              a platform — it’s a community where stories come alive, connecting
              readers and writers across the world. With an emphasis on
              immersive storytelling, it offers a space where imagination meets
              endless discovery.
            </p>
            <p
              className="pt-[5px] "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              By emphasizing creativity and exploration, we provides more than
              just literature — it creates an atmosphere where curiosity
              thrives, imagination soars, and every reader finds their perfect
              story.
            </p>
          </div>
        </section>

        {/* ============================== JOINING IN THE USER =============================== */}

        <section className="bg-yellow py-10">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto flex flex-col md:flex-row items-center max-[768px]:items-start justify-between gap-6">
            {/* Text Content */}
            <div className="max-w-lg text-center md:text-left max-[768px]:text-left max-[450px]:text-left">
              <h3
                style={{ fontFamily: "Archivo, sans-serif" }}
                className="text-[26px] font-bold max-[771px]:text-[24px]"
              >
                A new world opens with every book.
              </h3>
              <p
                style={{ fontFamily: "Archivo, sans-serif" }}
                className="text-lg max-[540px]:text-[16px] max-[771px]:text-[15px] mt-2 max-[768px]:text-left"
              >
                Every book you open leads to unforgettable moments.
              </p>

              <button
                onClick={() => handlejoin()}
                className="mt-4 px-5 py-2 text-sm font-semibold border-2 border-black rounded-md bg-white text-black flex items-center gap-2 hover:bg-black hover:text-white active:scale-95 transition"
              >
                Join Us <ArrowRight size={14} />
              </button>
            </div>

            {/* Image */}
            <div className="hidden md:block">
              <img
                loading="lazy"
                src={JoinUs}
                alt="Join Us"
                className="w-[320px] md:w-[350px] h-[220px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ============================= FOOTER ================================== */}

        <Footer />
      </div>
    </main>
  );
};

export default Discover;
