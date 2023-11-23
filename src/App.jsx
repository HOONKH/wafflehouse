import Banner from "./compnents/Banner";
import Header from "./compnents/Header";
import TwoMenus from "./compnents/TwoMenus";
import MiddleMenu from "./compnents/MiddleMenu";
import FadeIn from "./compnents/FadeIn";
import FooterImgbar from "./compnents/FooterImgbar";
import Footer from "./compnents/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MiddleMenu />
      <TwoMenus />
      <FadeIn />
      <FooterImgbar />
      <Footer />
      <div className="px-[12px] py-[12px] w-[60px] h-[60px] border-2 rounded-full wafflebg flex items-start justify-start ml-[1800px] border-none shadow-xl sticky bottom-[84px]">
        <img
          className="w-[35px] h-[35px] text-center "
          src="./images/online-order-icon.svg"
          alt="oder"
        />
      </div>
    </div>
  );
};

export default App;
