import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation";
import Cards from "./subcomponent/1.Home/subHome/Cards.jsx";
import MoreDetail from "./Requests/MoreDetails/More.js";
import NovelDetails from "./subcomponent/7.MoreDetails/NovelDetails.jsx";
import Comments from "./subcomponent/7.MoreDetails/Comments.jsx";
import Footer from "./subcomponent/1.Home/Footer.jsx";
import cartsData from "./Requests/Cart/CartInfo.js";

const MoreDetails = () => {
  const [moreInfo, setMoreInfo] = useState(null);
  const [youLike, setYouLike] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentDiv, setCommentDiv] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  let incomingData = location.state;
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

  // ========================== FINDING DATA IN DATA BASE ============================

  useEffect(() => {
    const fetchData = async (data, link) => {
      try {
        let moreDetails = await MoreDetail(data, link);
        setMoreInfo(moreDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData({ id: incomingData }, "more/getmoreinfo");
  }, [incomingData]);

  //======================== GETTING THE LIKED DATA  =============================

  useEffect(() => {
    const fetchData = async (data, link) => {
      try {
        let youLiked = await MoreDetail(data, link);
        setYouLike(
          youLiked.message
            .filter((item) => item._id !== moreInfo._id)
            .slice(0, 6)
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData({ category: moreInfo?.category }, "more/youlike");
  }, [moreInfo]);

  // ============================= CHECKING THE USER IS AUTHORIZED =========================

  const handlecomment = () => {
    let token = localStorage.getItem("tokenuserin");

    if (token) {
      setCommentDiv(true);
    } else {
      navigate("/login");
    }
  };

  // ======================= GETTING THE COMMENT DATA FROM THE DB =======================

  const getComments = async (data, link) => {
    try {
      let commentInfo = await MoreDetail(data, link);
      setComments(commentInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // ============================= SENDING COMMENT TO DB ================================

  const handlepost = async () => {
    if (moreInfo !== null) {
      let token = localStorage.getItem("tokenuserin");
      let dataToSend = { title: moreInfo?.title, token, commentValue };

      try {
        await MoreDetail(dataToSend, "comment/savecomment");

        await getComments({ title: moreInfo?.title }, "comment/getcomments");

        setCommentDiv(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (moreInfo !== null) {
      getComments({ title: moreInfo?.title }, "comment/getcomments");
    }
  }, [moreInfo]);

  const handlemore = (item) => {
    if (item !== null) {
      location.reload;
      navigate("/user/dashboard/more", { state: item._id });
    }
  };

  const handleLikes = async (item) => {
    let token = localStorage.getItem("tokenuserin");

    if (!token) return navigate("/login");

    try {
      let info = await cartsData("comment/likes", { item, token });
      await getComments({ title: moreInfo?.title }, "comment/getcomments");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="select-none">
      {/* ================== MORE DETAIL NAV BAR  ======================== */}

      <Navigation />

      {/* ======================= SPECIFIC NOVEL DETAILS =========================== */}

      <NovelDetails
        moreInfo={moreInfo}
        load={load}
        setLoad={setLoad}
        currentdot={currentdot}
      />

      {/* ============================== YOU MAY ALSO LIKE ============================= */}

      <div className="container max-w-[100%] bg-[#e6e5e5] min-h-[420px] mt-[20px]">
        <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] relative mx-auto ">
          <h1
            className="text-[24px] font-[700] py-[20px]"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            You May Also Like
          </h1>

          <div className="flex min-h-[320px]  flex-wrap justify-evenly gap-x-[10px] gap-y-[15px] pb-[20px]">
            {youLike.length === 0 ? (
              <div className="w-full flex items-center justify-center">
                <p
                  className="text-[19px] font-[500]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  For now no items founded.
                </p>
              </div>
            ) : (
              youLike.map((item, index) => (
                <Cards
                  handlemore={handlemore}
                  item={item}
                  index={index}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* ================================== COMMENTS SECTION ================================= */}

      <Comments
        commentDiv={commentDiv}
        setCommentDiv={setCommentDiv}
        handlepost={handlepost}
        handlecomment={handlecomment}
        comments={comments}
        setCommentValue={setCommentValue}
        handleLikes={handleLikes}
      />

      <Footer />
    </div>
  );
};

export default MoreDetails;
