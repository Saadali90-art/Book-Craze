import React from "react";
import Navigation from "../1.Home/Navigation";
import mission from "../../../assets/mission/mission.jpeg";
import { missionData, pricingPlans } from "./subcomponent/db.js";
import MissionCards from "./subcomponent/MissionCards";
import PricingCards from "./subcomponent/PricingCards";
import Footer from "../1.Home/Footer.jsx";
import More from "../../Requests/MoreDetails/More.js";

const Mission = () => {
  const handleSubsribe = async (priceId) => {
    let result = await More({ id: priceId }, "payment/plancheckout");

    window.location.href = result.url;
  };

  return (
    <div>
      {/* ======================= NAVIGATION BAR ========================== */}

      <Navigation />

      <main className="overflow-x-hidden max-[270px]:overflow-x-visible">
        {/* ========================== HERO SECTION ================================ */}

        <section className="w-[100%] ">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] h-[750px] mx-auto flex max-[871px]:flex-col gap-x-[20px] pt-[70px] max-[338px]:pt-[50px] ">
            <div className=" w-[55%] max-[1655px]:w-[45%] max-[871px]:w-[99%] max-[871px]:text-center max-[871px]:my-[50px] flex flex-col justify-center ">
              <p
                style={{ fontFamily: "Libertinus Serif, serif" }}
                className="text-[40px]/[45px] font-[600] max-[590px]:text-[30px]/[35px] max-[590px]:font-[600] "
              >
                Why We Exist & How You Can Join
              </p>
              <p className=" text-sm  pt-[20px] max-[871px]:text-center ">
                Our mission is to celebrate stories and connect readers with new
                adventures while helping writers share their voices. Our plans
                make it easy for everyone to be part of this growing community.
              </p>
            </div>
            <div className="w-[45%] max-[1655px]:w-[55%] max-[871px]:w-[99%] max-[500px]:mx-auto max-[871px]:h-[550px] max-[768px]:h-[500px]">
              <img
                loading="lazy"
                src={mission}
                alt=""
                className="min-w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* =============================   OUR MISSIONS  ==================================== */}

        <section className="w-full my-[20px] min-h-[550px] mt-[40px] ">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] h-full mx-auto">
            <p
              style={{ fontFamily: " Archivo, serif" }}
              className="text-[26px] font-[600] max-[590px]:text-[22px]/[35px] max-[590px]:font-[600]  py-[30px] max-[590px]:pt-[0px]"
            >
              Our Mission
            </p>

            {/* =========================== MISSION CARDS ================================== */}

            <div
              className="flex flex-wrap gap-y-[20px] gap-x-[18px] max-[1293px]:gap-y-[20px]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {missionData.map((item, index) => (
                <MissionCards item={item} key={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================= PRICING SECTION =================================== */}

        <section className="w-full mt-[20px] min-h-[550px] mb-[60px]  ">
          <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] h-full mx-auto ">
            <p
              style={{ fontFamily: " Archivo, serif" }}
              className="text-[26px] font-[600] max-[590px]:text-[22px]/[35px] max-[590px]:font-[600] py-[30px]"
            >
              Our Pricing Plan
            </p>
          </div>

          {/* ======================== PRICING CARDS ===============================  */}

          <div
            id="premium"
            className="w-[35%]  max-[1170px]:w-[80%]  max-[924px]:w-[90%] max-[350px]:w-[95%] h-full mx-auto flex items-center justify-center"
          >
            <div className="w-full flex max-[894px]:flex-col max-[894px]:gap-y-[40px] mx-auto justify-center gap-x-[40px]">
              {pricingPlans.map((item, index) => (
                <PricingCards
                  item={item}
                  key={index}
                  index={index}
                  handleSubsribe={handleSubsribe}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* =========================== FOOTER =======================  */}

      <Footer />
    </div>
  );
};

export default Mission;
