import { FaPlayCircle, FaStopCircle, FaPauseCircle } from "react-icons/fa";
import "animate.css/animate.min.css";
import WOW from "wowjs";
import { useEffect } from "react";
import { useState } from "react";

const FadeIn = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
    });
    wow.init();

    return () => wow.stop();
  }, []);

  return (
    <div className="h-[478px] max-w-screen grid grid-cols-2 justify-items-center pt-24">
      <div className="h-[318px] w-[440px]  ml-[430px]  wow animate__animated animate__fadeInLeft">
        {/* animate__animated animate__fadeInLeft */}
        <ul>
          <li className="fonthouse text-[26px]">WAFFLE RECORDS</li>
          <li className="fonthouse text-[14px]">
            As classic as our waffle. As sweet as our pie.
          </li>
          <div className="w-[335px] h-[250px] flex justify-start items-end mt-2 relative">
            <img className="grow" src="./images/jukebox.jpg" alt="juke" />
            <img
              className="h-[240px] ml-[302px] z-10 absolute"
              src="./images/jukeboximage.png"
              alt="jukeimg"
            />
            <div className=" z-20 flex flex-col items-center justify-center h-[240px] ml-5 text-[50px]">
              <FaPlayCircle />
              <FaPauseCircle />
              <FaStopCircle />
            </div>
            <div></div>
          </div>
        </ul>
      </div>

      <div className="h-[318px] w-[520px]  mr-[350px] wow animate__animated animate__fadeInRight ">
        {/* animate__animated animate__fadeInRight */}
        <ul>
          <li className="fonthouse text-[26px]">REGULARS GET THE BEST PERKS</li>
          <li className="fonthouse text-[14px]">
            For special offers, become a member of our Regulars Club.
          </li>
          <div className="flex justify-start items-end mt-[18px] relative ">
            <img
              className="h-[240px]"
              src="./images/jukebox2.webp"
              alt="juke2"
            />
            <div className="absolute flex flex-col gap-4 mb-6 ml-4">
              <input
                className="px-[10px] py-[6px]"
                placeholder="First Name (Required)"
                type="text"
              />
              <input
                className="px-[10px] pr-[70px] py-[6px]"
                placeholder="Last Name (Required)"
                type="text"
              />
              <input
                className="px-[10px]  py-[6px] "
                placeholder="Email Address (Required)"
                type="text"
              />
              <input
                className="text-left border-2 px-2 wafflebg border-none fonthouse py-[6px] font-light pl-[15px] w-[80px]"
                type="submit"
                value="SIGN UP"
              />
            </div>
            <div></div>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default FadeIn;
