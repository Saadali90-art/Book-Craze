import React from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

const SignUpForm = ({ handlesubmit, showpass, setshowpass }) => {
  return (
    <>
      <form
        className="flex flex-col relative"
        id="formsignup"
        onSubmit={handlesubmit}
      >
        <input
          required
          type="text"
          placeholder="Enter Your Name"
          name="name"
          minLength={4}
          className=" bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px]  text-[15px]  select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d] mt-[15px]  "
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          name="email"
          className=" bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px]  text-[15px]  select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
        />
        <input
          required
          type={showpass ? "text" : "password"}
          placeholder="Password"
          name="password"
          className=" bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px]  text-[15px]  select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
        />

        <button
          type="button"
          onClick={() => setshowpass(!showpass)}
          className="absolute top-[48.5%] right-[10px]"
        >
          {showpass ? <FaRegEye /> : <RiEyeCloseFill />}
        </button>

        <input
          required
          type={showpass ? "text" : "password"}
          name="confirm"
          placeholder="Confirm Password"
          className=" bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px]  text-[15px] select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
        />
        <input
          required
          type="text"
          placeholder="Phone Number"
          name="phone"
          minLength={10}
          className=" bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px]  text-[15px] select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
        />
      </form>
    </>
  );
};

export default SignUpForm;
