import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 1100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);
    watchScroll();
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div
      isHidden={isHidden}
      className={`top-0 z-20 sticky duration-700 ${
        isHidden && "opacity-0 duration-700"
      } `}
    >
      <h3 className="bg-black text-white max-w-screen h-[40px] fonthouse flex items-center justify-center sticky ">
        <span className="waffletext">GOOD FOOD FAST.</span>
        <span className="rounded-full border-2 border-[#FFF200] w-[10px] h-[10px] text-[5px] waffletext text-center mb-4">
          R
        </span>
        JOIN OUR REGULARS CLUB AND GET A FREE ORDER OF HASHBROWNS! SIGN UP{" "}
        <span className="underline ml-1">HERE.</span>
      </h3>
      <div
        className="h-[114px] max-w-screen  flex justify-between items-center  bg-white
      "
      >
        <div className=" w-[260px] h-[72px] px-[10px]">
          <img
            className="px-[10px]"
            src="./images/waffle-house-logo.svg"
            alt="logo"
          />
        </div>
        <ul className=" flex items-center gap-7 text-2xl text-[18px] px-3">
          <button className="">
            <FaLocationDot className="waffletext text-[40px]" />
          </button>
          <li className="fonthouse">FIND A STORE</li>
          <li className="fonthouse">ORDER ONLINE</li>
          <li className="fonthouse">FOOD</li>
          <li className="fonthouse">CAREERS</li>
          <li className="fonthouse">SHOP</li>
          <li className="fonthouse">MORE</li>
          <button>
            <IoIosMenu className="wafflebg text-[45px]" />
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
