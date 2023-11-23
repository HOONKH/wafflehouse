import { FaFacebookF, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-diamond-pattern max-w-screen h-[25px] mt-10 bg-[#FFF200] "></div>
      <div className="flex justify-between items-center ">
        <div className="max-w-screen h-[130px] flex flex-col justify-center">
          <ul className="h-[26px] max-w-screen   z-20 flex gap-5 ml-10">
            <li className="fonthouse text-[16px] border-r-2 border-r-black px-4">
              PRIVACY NOTICE
            </li>
            <li className="fonthouse text-[16px] border-r-2 border-r-black px-4">
              CONTACT
            </li>
            <li className="fonthouse text-[16px] border-r-2 border-r-black px-4">
              FAQ
            </li>
            <li className="fonthouse text-[16px] border-r-2 border-r-black px-4">
              SURPLUS PROPERTIES
            </li>
            <li className="fonthouse text-[16px] border-r-2 border-r-black px-4">
              WEBSITE ACCESSIBILITY
            </li>
            <li className="fonthouse text-[16px] pl-2">ASSOCIATE LOGIN</li>
          </ul>
          <ul className="h-[26px] max-w-screen   z-20 flex gap-5 ml-[56px] pt-6 text-[11px] text-[#595959]">
            ©2023 WH Capital, L.L.C. ®™ All Waffle House trademarks are owned by
            WH Capital, L.L.C. and licensed to Waffle House, Inc.
          </ul>
        </div>
        <div className="flex mb-3">
          <div className="flex text-[28px] pr-[30px] gap-8 mr-24  ">
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
