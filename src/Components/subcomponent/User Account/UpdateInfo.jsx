const UpdateInfo = ({
  error,
  edit,
  accountInfo,
  updateInfo,
  setUpdateInfo,
  load,
  handleFormSubmit,
  loadingdots,
  currentdot,
}) => {
  return (
    <>
      {/* =================== UPDATE SECTION ======================= */}

      <div
        style={{
          opacity: edit ? 1 : 0,
          transform: edit ? "translateX(0px)" : "translateX(1200px)",
          transition: "opacity 300ms linear 200ms",
        }}
        className="w-full mx-auto mt-[30px] absolute top-30 "
      >
        {/* ================= FORM SECTION ======================== */}

        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          className="container w-[60%] max-[806px]:w-[70%] max-[697px]:w-[80%] max-[588px]:w-[100%] min-h-[400px] mx-auto flex flex-col max-[491px]:items-center gap-y-[10px] overflow-hidden "
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          {/* ======== USERNAME  */}

          <div className="flex justify-between max-[491px]:flex-col">
            <p className="text-[17px] my-[7px] font-[600]">Username</p>
            <input
              required
              value={updateInfo?.name ?? accountInfo.name}
              onChange={(e) =>
                setUpdateInfo({
                  ...updateInfo,
                  name: e.target.value,
                })
              }
              name="name"
              className="text-[16px] bg-white w-[300px] max-[335px]:w-[250px] rounded-sm outline-none border-gray-500 border-[1px] px-[5px] py-[6px]  max-[340px]:text-[16px]"
              type="text"
            />
          </div>

          {/* ======== EMAIL  */}

          <div className="flex justify-between max-[491px]:flex-col">
            <p className="text-[17px] py-[7px] font-[600]">Email Address</p>
            <input
              required
              readOnly
              value={updateInfo?.email ?? accountInfo.email}
              onChange={(e) =>
                setUpdateInfo({
                  ...updateInfo,
                  email: e.target.value,
                })
              }
              name="email"
              className="text-[16px] bg-white w-[300px] max-[340px]:text-[16px]  max-[335px]:w-[250px] rounded-sm outline-none border-gray-500 border-[1px] px-[5px] py-[6px]"
              type="email"
            />
          </div>

          {/* ============= GENDER */}
          <div className="flex justify-between max-[491px]:flex-col">
            <p className="text-[17px] py-[10px] font-[600]">Gender</p>

            {/* ======= MALE  */}
            <div className="flex justify-between w-[300px] max-[335px]:w-[250px]">
              <label className="flex items-center gap-x-[10px] cursor-pointer">
                <input
                  checked={
                    (updateInfo?.gender ?? accountInfo.gender) === "Male"
                  }
                  onChange={(e) =>
                    setUpdateInfo({
                      ...updateInfo,
                      gender: e.target.value,
                    })
                  }
                  type="radio"
                  name="gender"
                  value={"Male"}
                  className="peer hidden max-[340px]:text-[16px]"
                />

                <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full border border-gray-400 peer-checked:border-blue-500 peer-checked:border-[5px] transition 1s linear">
                  <span className="w-[10px] h-[10px] rounded-full bg-transparent peer-checked:bg-blue-500"></span>
                </span>

                <p className="text-[16px] font-[400]">Male</p>
              </label>

              {/* ======= FEMALE */}

              <label className="flex items-center gap-x-[10px] cursor-pointer">
                <input
                  checked={
                    (updateInfo?.gender ?? accountInfo.gender) === "Female"
                  }
                  onChange={(e) =>
                    setUpdateInfo({
                      ...updateInfo,
                      gender: e.target.value,
                    })
                  }
                  type="radio"
                  value={"Female"}
                  name="gender"
                  className="peer hidden max-[340px]:text-[16px]"
                />

                <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full border border-gray-400 peer-checked:border-blue-500 peer-checked:border-[5px] transition 1s linear">
                  <span className="w-[10px] h-[10px] rounded-full bg-transparent peer-checked:bg-blue-500"></span>
                </span>

                <p className="text-[16px] font-[400]">Female</p>
              </label>
            </div>
          </div>

          {/* ======== LOCATION  */}

          <div className="flex justify-between max-[491px]:flex-col">
            <p className="text-[17px] py-[10px] font-[600]">Location</p>
            <select
              value={updateInfo?.location ?? accountInfo.location}
              onChange={(e) =>
                setUpdateInfo({
                  ...updateInfo,
                  location: e.target.value,
                })
              }
              className="text-[16px] bg-white w-[300px] max-[340px]:text-[16px]  max-[335px]:w-[250px] rounded-sm outline-none border-gray-500 border-[1px] px-[5px] py-[6px]"
              name="location"
            >
              <option value="global">Global</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="albania">Albania</option>
              <option value="algeria">Algeria</option>
              <option value="argentina">Argentina</option>
              <option value="armenia">Armenia</option>
              <option value="australia">Australia</option>
              <option value="austria">Austria</option>
              <option value="azerbaijan">Azerbaijan</option>
              <option value="bahrain">Bahrain</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="belgium">Belgium</option>
              <option value="benin">Benin</option>
              <option value="bhutan">Bhutan</option>
              <option value="brazil">Brazil</option>
              <option value="bulgaria">Bulgaria</option>
              <option value="cameroon">Cameroon</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="colombia">Colombia</option>
              <option value="cuba">Cuba</option>
              <option value="denmark">Denmark</option>
              <option value="dominica">Dominica</option>
              <option value="egypt">Egypt</option>
              <option value="finland">Finland</option>
              <option value="france">France</option>
              <option value="georgia">Georgia</option>
              <option value="germany">Germany</option>
              <option value="greece">Greece</option>
              <option value="iceland">Iceland</option>
              <option value="india">India</option>
              <option value="indonesia">Indonesia</option>
              <option value="iran">Iran</option>
              <option value="iraq">Iraq</option>
              <option value="ireland">Ireland</option>
              <option value="israel">Israel</option>
              <option value="italy">Italy</option>
              <option value="japan">Japan</option>
              <option value="jordan">Jordan</option>
              <option value="kazakhstan">Kazakhstan</option>
              <option value="kenya">Kenya</option>
              <option value="korea-north">Korea, North</option>
              <option value="korea-south">Korea, South</option>
              <option value="kuwait">Kuwait</option>
              <option value="kyrgyzstan">Kyrgyzstan</option>
              <option value="liberia">Liberia</option>
              <option value="libya">Libya</option>
              <option value="madagascar">Madagascar</option>
              <option value="malaysia">Malaysia</option>
              <option value="maldives">Maldives</option>
              <option value="mali">Mali</option>
              <option value="mexico">Mexico</option>
              <option value="monaco">Monaco</option>
              <option value="morocco">Morocco</option>
              <option value="nepal">Nepal</option>
              <option value="netherlands">Netherlands</option>
              <option value="new-zealand">New Zealand</option>
              <option value="nigeria">Nigeria</option>
              <option value="norway">Norway</option>
              <option value="oman">Oman</option>
              <option value="pakistan">Pakistan</option>
              <option value="palau">Palau</option>
              <option value="palestine">Palestine</option>
              <option value="panama">Panama</option>
              <option value="papua-new-guinea">Papua New Guinea</option>
              <option value="paraguay">Paraguay</option>
              <option value="peru">Peru</option>
              <option value="philippines">Philippines</option>
              <option value="poland">Poland</option>
              <option value="portugal">Portugal</option>
              <option value="qatar">Qatar</option>
              <option value="romania">Romania</option>
              <option value="russia">Russia</option>
              <option value="samoa">Samoa</option>
              <option value="saudi-arabia">Saudi Arabia</option>
              <option value="singapore">Singapore</option>
              <option value="south-africa">South Africa</option>
              <option value="south-sudan">South Sudan</option>
              <option value="spain">Spain</option>
              <option value="sri-lanka">Sri Lanka</option>
              <option value="sudan">Sudan</option>
              <option value="sweden">Sweden</option>
              <option value="switzerland">Switzerland</option>
              <option value="syria">Syria</option>
              <option value="taiwan">Taiwan</option>
              <option value="tajikistan">Tajikistan</option>
              <option value="tanzania">Tanzania</option>
              <option value="thailand">Thailand</option>
              <option value="timor-leste">Timor-Leste</option>
              <option value="turkey">Turkey</option>
              <option value="turkmenistan">Turkmenistan</option>
              <option value="uganda">Uganda</option>
              <option value="ukraine">Ukraine</option>
              <option value="united-arab-emirates">United Arab Emirates</option>
              <option value="united-kingdom">United Kingdom</option>
              <option value="united-states">United States</option>
              <option value="uruguay">Uruguay</option>
              <option value="uzbekistan">Uzbekistan</option>
              <option value="vanuatu">Vanuatu</option>
              <option value="vatican-city">Vatican City</option>
              <option value="venezuela">Venezuela</option>
              <option value="vietnam">Vietnam</option>
              <option value="yemen">Yemen</option>
              <option value="zambia">Zambia</option>
              <option value="zimbabwe">Zimbabwe</option>
            </select>
          </div>

          {/* ========== ABOUT ME  */}

          <div className="flex justify-between max-[491px]:flex-col">
            <p className="text-[17px] py-[7px] font-[600]">About</p>
            <textarea
              value={updateInfo?.about ?? accountInfo.about ?? ""}
              onChange={(e) =>
                setUpdateInfo({
                  ...updateInfo,
                  about: e.target.value,
                })
              }
              name="about"
              placeholder="Describe yourself..."
              className="text-[16px] bg-white w-[300px] max-[340px]:text-[16px]  max-[335px]:w-[250px] h-[150px] resize-none rounded-sm outline-none border-gray-500 border-[1px] px-[5px] py-[6px]"
            ></textarea>
          </div>

          <p
            style={{
              opacity: error ? 1 : 0,
              height: error ? "20px" : "0px",
              transition: "opacity 500ms linear , height 200ms linear",
            }}
            className=" mx-auto text-red-500 font-[500]"
          >
            {error}
          </p>

          {/* =================== SAVE UPDATES == */}
          <div className="flex justify-end max-[491px]:w-[300px] max-[335px]:w-[250px]">
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
                className="bg-blue-500 px-[10px] py-[8px] min-w-[100px]  rounded-sm text-white text-[17px] font-[500] cursor-pointer "
                type="submit"
              >
                Save changes
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateInfo;
