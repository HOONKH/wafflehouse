import { MdNavigateNext } from "react-icons/md";

const TwoMenus = () => {
  return (
    <div className="max-w-screen h-[650px] -t-18  relative">
      <ul className="flex justify-center items-center h-[322px] max-w-screen ">
        <img
          className="h-[322px] grow"
          src="./images/breakfastbg.webp"
          alt="break"
        />
        <li className="absolute flex flex-col items-center">
          <li className="fonthouse text-white text-[42px]">
            {" "}
            BREAKFAST FAVORITE{" "}
          </li>
          <button className="border-2 border-none wafflebg flex items-center px-[20px] py-[20px] fontside text-[24px]">
            ALL DAY, EVERY DAY
            <MdNavigateNext />
          </button>
        </li>
      </ul>
      <ul className="flex justify-center items-center mt-3 h-[322px] max-w-screen ">
        <img
          className="h-[322px] grow"
          src="./images/burgerbg.jpg"
          alt="burger"
        />
        <li className="absolute flex flex-col items-center">
          <li className="fonthouse text-white text-[42px] ">
            LUNCH & DINNER FAVORITES
          </li>
          <button className="border-2 border-none wafflebg flex items-center px-[20px] py-[20px] fontside text-[24px]">
            SMOTHER YOUR HUNGER
            <MdNavigateNext />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TwoMenus;
