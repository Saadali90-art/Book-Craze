import { useEffect, useState } from "react";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import { useNavigate } from "react-router-dom";
import "../animation.css";
import PublishForm from "./subcomponent/5.Publish/PublishForm";
import dummyBook from "../assets/Publish/dummybook.jpg";

const Publish = () => {
  // =========== HOOKS OR OTHER DATA =====================

  const [currentimage, setcurrentimage] = useState(dummyBook);

  const [file, setFile] = useState(null);
  const [url, seturl] = useState(false);
  const [drop, setdrop] = useState(false);
  const [browse, setbrowse] = useState(false);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  let [currentdot, setcurrentdot] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  // ================== FOR REMOVING THE DEFAULT BEHAVIOUR OF MVING TO OTHER TABS

  useEffect(() => {
    window.addEventListener("drop", (e) => e.preventDefault());
    window.addEventListener("dragover", (e) => e.preventDefault());
  }, []);

  // ============== FORM DATA TO OBJECT ======================

  const handlesubmit = (e) => {
    e.preventDefault();
    seterror("Backend Not Available");

    setTimeout(() => {
      seterror(null);
    }, 2000);
  };

  // ================== FOR BROWSING FILE FROM COMPUTER =======================

  const handleclick = (e) => {
    e.preventDefault();

    let data = e.target.files[0];

    if (data) {
      setcurrentimage(URL.createObjectURL(data));
    }
  };

  // =================== FOR DROPING IMAGE ON DIV ====================

  const handledrop = (e) => {
    e.preventDefault();

    let data = e.dataTransfer.files[0];

    if (data) {
      setcurrentimage(URL.createObjectURL(data));
    }
  };

  // ================== DOWNLOADING IMAGE FROM URL ============================

  const urlToFile = async (url) => {
    setcurrentimage(url);
  };

  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="select-none"
    >
      {/* ============ Publish NAV BARR ==================*/}

      <div className="container max-w-[100%]  h-[70px]  bg-gray-100 fixed z-20 mt-[30px]">
        <div className="w-[80%] mx-auto h-[70px] flex items-center justify-center ">
          <button
            className="absolute my-auto left-[15px] p-2 rounded-[50%] bg-transparent cursor-pointer max-[395px]:left-[1px]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={"24px"} />
          </button>
          <p className="text-[24px] font-[600] text-[#1c1c1c] max-[500px]:text-[22px] ">
            Book Details
          </p>
        </div>
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ===================== INPUT FORM AREA ======================== */}

      <PublishForm
        handlesubmit={handlesubmit}
        url={url}
        browse={browse}
        drop={drop}
        error={error}
        seturl={seturl}
        setbrowse={setbrowse}
        setdrop={setdrop}
        handledrop={handledrop}
        handleclick={handleclick}
        currentimage={currentimage}
        urlToFile={urlToFile}
        setcurrentimage={setcurrentimage}
        load={load}
        currentdot={currentdot}
      />
    </div>
  );
};

export default Publish;
