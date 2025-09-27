const PublishForm = ({
  handlesubmit,
  url,
  seturl,
  browse,
  setbrowse,
  error,
  drop,
  setdrop,
  handledrop,
  handleclick,
  currentimage,
  urlToFile,
  load,
  currentdot,
}) => {
  let loadingdots = Array.from({ length: 4 });

  return (
    <>
      <div className="w-[100%]  ">
        <div className="w-[45%] max-[890px]:w-[50%] max-[763px]:w-[60%] max-[637px]:w-[80%] max-[471px]:w-[95%] mx-auto h-[500px] pt-[90px] ">
          <form
            className="w-full flex flex-col"
            onSubmit={handlesubmit}
            encType="multipart/form-data"
          >
            {/* =========================== BOOK NAME SECTION ======================================= */}

            <p className="text-[17px] pb-[10px] ">Book Name</p>
            <input
              required
              type="text"
              name="title"
              placeholder="Title.."
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
            />

            {/* =========================== CATEGORY SECTION ======================================= */}

            <p className="text-[17px] py-[10px]">Category</p>

            <select
              name="category"
              className="w-full mx-auto outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[8px] transition-all duration-400 ease"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Fiction">Fiction</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Adventure">Adventure</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
              <option value="Horror">Horror</option>
              <option value="Historical">Historical</option>
              <option value="Slice of Life">Slice of Life</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Supernatural">Supernatural</option>
              <option value="Psychological">Psychological</option>
              <option value="Action">Action</option>
              <option value="Martial Arts">Martial Arts</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>

              {/* ==== Anime Specific ==== */}
              <option value="Shonen">Shonen</option>
              <option value="Shojo">Shojo</option>
              <option value="Seinen">Seinen</option>
              <option value="Josei">Josei</option>
              <option value="Isekai">Isekai</option>
              <option value="Mecha">Mecha</option>
              <option value="Ecchi">Ecchi</option>
              <option value="Harem">Harem</option>
              <option value="Reverse Harem">Reverse Harem</option>
              <option value="Magical Girl">Magical Girl</option>
              <option value="Post-Apocalyptic">Post-Apocalyptic</option>
              <option value="Cyberpunk">Cyberpunk</option>
              <option value="Military">Military</option>
              <option value="Demons">Demons</option>
              <option value="Vampires">Vampires</option>
              <option value="School">School</option>
              <option value="Game">Game</option>

              {/* ==== Novel Specific ==== */}
              <option value="Biography">Biography</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Poetry">Poetry</option>
              <option value="Classic Literature">Classic Literature</option>
              <option value="Young Adult">Young Adult</option>
              <option value="Children">Children</option>
              <option value="Crime">Crime</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Educational">Educational</option>
              <option value="Spiritual">Spiritual</option>

              {/* ==== Fallback ==== */}
              <option value="None">None</option>
            </select>

            {/* =========================== GENDER SECTION ======================================= */}

            <p className="text-[17px] py-[14px]">Gender Oriented</p>

            {/* ================= MALE  */}

            <div className="w-[50%] pb-[14px] mx-auto flex justify-between max-[1394px]:w-[80%] max-[355px]:w-[90%]">
              <label htmlFor="Male" className="cursor-pointer">
                Male
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value={"Male"}
                  className="accent-black scale-110 cursor-pointer ml-[20px] max-[395px]:ml-[10px] "
                />
              </label>

              {/* ================= FEMALE  */}

              <label htmlFor="Female" className="cursor-pointer">
                Female
                <input
                  type="radio"
                  name="gender"
                  id="Female"
                  value={"Female"}
                  className="accent-black scale-110 cursor-pointer ml-[20px] max-[395px]:ml-[10px] "
                />
              </label>

              {/* ================== BOTH  */}
              <label htmlFor="Both" className="cursor-pointer">
                Both
                <input
                  type="radio"
                  name="gender"
                  id="Both"
                  value={"Both"}
                  className="accent-black scale-110 cursor-pointer ml-[20px] max-[395px]:ml-[10px] "
                />
              </label>
            </div>

            {/* ======================= IMAGE COVER ========================================== */}

            <p className="text-[17px] pb-[14px]">Image Cover</p>
            <img
              loading="lazy"
              src={currentimage}
              className="w-[120px] h-[120px] rounded-lg mb-[14px]"
            />

            {/* =========================== WISH OF IMAGE FORM ================================= */}

            <div
              style={{
                opacity: url || browse || drop ? 0 : 1,
                height: url || browse || drop ? "0px" : "90px",
                transition: "height ease 500ms, opacity ease 500ms",
                paddingBottom: "5px",
                overflow: "hidden",
              }}
            >
              <p className="text-[17px] max-[357px]:text-[15px]">
                How would you like to add your image?
              </p>
              <div className="w-[95%]  mx-auto flex justify-between gap-x-[10px] max-[334px]:gap-x-[5px] py-[14px]">
                <button
                  onClick={() => seturl(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_15px_0px_rgba(59,130,246,1)] cursor-pointer transition ease duration-300 active:bg-black/50 active:text-white whitespace-nowrap  max-[413px]:text-sm  max-[371px]:px-[4px]"
                >
                  Image URL
                </button>

                <button
                  onClick={() => setdrop(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_15px_0px_rgba(59,130,246,1)] cursor-pointer transition ease duration-300 active:bg-black/50 active:text-white whitespace-nowrap  max-[413px]:text-sm max-[371px]:px-[4px]"
                >
                  Drag & Drop
                </button>
                <button
                  onClick={() => setbrowse(true)}
                  type="button"
                  className="rounded-lg px-[10px] py-[5px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_15px_0px_rgba(59,130,246,1)] cursor-pointer transition ease duration-300 active:bg-black/50 active:text-white whitespace-nowrap  max-[413px]:text-sm max-[371px]:px-[4px]"
                >
                  Browse Files
                </button>
              </div>
            </div>

            {/* =========================== URL DIV ================================= */}

            <div
              style={{
                opacity: url ? 100 : 0,
                height: url ? "auto" : "0px",
                transform: url ? "translateX(0px)" : "translateX(-1200px)",
                transition: url
                  ? "opacity ease 1s , height ease 1s  "
                  : "opacity 1s ease, height 1s ease, transform 1s ease",
              }}
            >
              <p className="text-[17px] pb-[14px]">Enter Image URL</p>
              <input
                type="text"
                name="bookImage"
                placeholder="Please Enter Valid Image Address.."
                className="w-full mx-auto outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
                onChange={(e) => urlToFile(e.target.value)}
              />
            </div>

            {/* =========================== DRAG AND DROP SECTION =========================== */}

            <div
              className="w-[100%]  mx-auto "
              style={{
                opacity: drop ? 100 : 0,
                height: drop ? "auto" : "0px",
                transition: "opacity ease 1s, height ease 1s",
                transitionDelay: "200ms",
              }}
              onDrop={handledrop}
            >
              <div
                onDragOver={(e) => e.preventDefault()}
                className="w-full h-[250px] bg-gray-200 flex justify-center items-center rounded-xl"
              >
                <p className="text-[17px]">Drop Your Image Here</p>
              </div>
            </div>

            {/* ==================================== BROWSE FILES ============================== */}

            <div
              className="relative"
              style={{
                opacity: browse ? 1 : 0,
                height: browse ? "30px" : "0px",
                transition: "height 1s ease, opacity 500ms ease",
                transitionDelay: "200ms",
              }}
            >
              <input
                type="file"
                onChange={handleclick}
                name="bookImage"
                className="absolute z-10 border-[1px] rounded-[10px] border-black px-[10px] py-[4px] w-[230px] outline-none cursor-pointer"
                style={{
                  opacity: browse ? 1 : 0,
                  transition: "opacity ease 1s",
                }}
              />
            </div>

            {/* ================================ PRICE OF BOOK ================================ */}

            <div className="relative z-10 pt-[17px]">
              <p className="text-[17px] pb-[10px] ">Price</p>
              <input
                required
                type="number"
                name="price"
                className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-lg px-[10px] py-[5px] transition-all duration-400 ease"
              />
            </div>

            {/* ================================ CONTENT DIV ================================ */}
            <div className="flex flex-col relative z-10">
              <p className="text-[17px] py-[14px] ">Main Idea</p>
              <textarea
                required
                name="description"
                className="outline-[1px] rounded-lg px-[10px] py-[5px] h-[200px] resize-none transition-all duration-400 ease hover:outline-blue-400 focus:outline-blue-400"
                contentEditable
              ></textarea>
            </div>

            <div className="flex flex-col">
              <p
                style={{
                  opacity: error ? 1 : 0,
                  height: error ? "20px" : "0px",
                  transition: "opacity ease 700ms, height ease 700ms",
                }}
                className="text-red-500 mx-auto my-[5px] font-[500]"
              >
                Backend Not Available.
              </p>
            </div>

            <div className="flex items-end justify-end w-full ">
              {load ? (
                <div
                  className="w-[100%] flex justify-end items-center my-[20px] mb-[30px] "
                  style={{
                    height: load ? "10px" : "0px",
                    opacity: load ? 1 : 0,
                    transition: "height 500ms ease, opacity 500ms ease",
                  }}
                >
                  <p className="text-[15px] font-[500]">Loading</p>
                  <div className="flex gap-x-[1px] mt-[4px]">
                    {loadingdots.map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] h-[3px] bg-black rounded-[50%]"
                        style={{
                          background: currentdot >= i ? "black" : "white",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className=" my-[14px] mb-[20px] px-[15px] py-[5px] text-[17px] bg-blue-500 rounded-lg font-[500] text-white cursor-pointer active:brightness-60 active:scale-95"
                >
                  Submit
                </button>
              )}
            </div>
          </form>

          {/* =========================== FORMS END ============================= */}
        </div>
      </div>
    </>
  );
};

export default PublishForm;
