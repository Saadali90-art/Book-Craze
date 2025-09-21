import ThumbsUp from "lucide-react/dist/esm/icons/thumbs-up";
import ThumbsFilled from "../../../assets/More Details/ThumbFilled.svg";

import user from "../../../assets/MyAccount/user.svg";

const Comments = ({
  commentDiv,
  setCommentDiv,
  handlepost,
  handlecomment,
  setCommentValue,
  comments,
  handleLikes,
}) => {
  return (
    <>
      <div className="w-[100%] min-h-[220px] bg-pink- mb-[30px] ">
        <div className="container w-[70%] max-[1170px]:w-[80%] bg-yellow- max-[924px]:w-[90%]  mx-auto">
          <div className="w-full  flex justify-between items-center py-[20px]">
            <p className="text-[24px] font-[700] ">Comments</p>

            {/* ==================== ADDING COMMENT BUTTONS ======================= */}

            {commentDiv ? (
              <div className="flex flex-row gap-x-[10px]">
                <button
                  onClick={() => setCommentDiv(false)}
                  className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
                >
                  Back
                </button>

                <button
                  onClick={handlepost}
                  className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
                >
                  Post
                </button>
              </div>
            ) : (
              <button
                onClick={handlecomment}
                className="px-[15px] py-[8px] rounded-lg font-[500] text-[16px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black border-transparent border-[1px] hover:border-black  cursor-pointer"
              >
                Comment
              </button>
            )}
          </div>

          {/* ================= COMMENTS SHOWING =================== */}

          {commentDiv ? (
            <div
              className="flex flex-col relative z-10"
              style={{
                // height: commentDiv ? "200px" : "0px",
                opacity: commentDiv ? 1 : 0,
                transition: " opacity 700ms ease",
              }}
            >
              <textarea
                onChange={(e) => setCommentValue(e.target.value)}
                className="outline-[1px] rounded-lg px-[10px] py-[5px] h-[200px] resize-none transition-all duration-400 ease hover:outline-blue-400 focus:outline-blue-400"
                contentEditable
              ></textarea>
            </div>
          ) : comments.length <= 0 ? (
            <div
              className="mx-auto w-full h-[100px] flex justify-center items-center"
              style={{
                // height: commentDiv ? "0px" : "90px",
                opacity: commentDiv ? 0 : 1,
                transition: " opacity 700ms ease",
              }}
            >
              <p className="text-[17px] font-[600] ">No Recent Comments</p>
            </div>
          ) : (
            // ================= IF COMMENT PRESENT =================

            <div
              style={{
                // height: commentDiv ? "0px" : "70px",
                opacity: commentDiv ? 0 : 1,
                transition: "opacity 700ms ease",
              }}
              className="flex flex-col gap-y-[]"
            >
              {comments.map((item, index) => (
                <div key={index} className="min-h-[70px] ">
                  {/* ============== TOP USER INFO SECTION=======================  */}

                  <div className="flex items-center gap-x-[20px] mt-[10px]">
                    {item.profileImage === null ? (
                      <img
                        loading="lazy"
                        src={user}
                        className="w-[40px] h-[40px] rounded-[50%] "
                      />
                    ) : (
                      <img
                        loading="lazy"
                        className="w-[40px] h-[40px] rounded-[50%] "
                        src={item.profileImage}
                        alt=""
                      />
                    )}

                    <div>
                      <p className="capitalize text-[16px] font-[500]">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-gray-800 ">
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    {item.Author && (
                      <div className="flex flex-col items-center">
                        <span className="bg-blue-500 text-white text-[11px] font-[500] px-[5px] py-[3px] rounded-md ">
                          Author
                        </span>

                        <span className="w-[10px] h-[17px]"></span>
                      </div>
                    )}
                  </div>

                  {/* ================ COMMENT VALUE ======================== */}

                  <div className="pt-[10px] w-full">
                    <p className="text-[15px] ">{item.commentValue}</p>
                  </div>

                  <div className="flex w-full justify-end gap-x-[10px] mt-[3px]">
                    <button
                      onClick={() => handleLikes(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.likes > 0 ? (
                        <img src={ThumbsFilled} className="w-[20px] h-[20px]" />
                      ) : (
                        <ThumbsUp className="w-[20px] h-[20px]" />
                      )}
                    </button>
                    <p>{item.likes}</p>
                  </div>

                  <div className="grow bg-gray-300 h-[1px] my-[5px]"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
