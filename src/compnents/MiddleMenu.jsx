import Slider from "react-slick";
import MiddleMenuCard from "./MiddelMenuCard";

const middleData = [
  {
    image: "beef.jpg",
    desc: "100% ANGUS BEEF - BACON ANGUS CHEESEBURGER DELUXE",
  },
  {
    image: "blueberrywaffle.webp",
    desc: "BLUEBERRY WAFFLE! IT'S BACK!",
  },
  {
    image: "all-star.jpg",
    desc: "ALL-STAR SPECIAL : THE GREATEST OF ALL TIME",
  },
  {
    image: "pecanwaffle.webp",
    desc: "TRY OUR PECAN WAFFLE",
  },
];

const MiddleMenu = () => {
  return (
    <>
      {" "}
      <div className="max-w-screen h-[565px] bg-brick-pattern bg-repeat bg-[134px] ">
        <Slider
          className="center "
          centerMode={true}
          centerPadding="100px"
          slidesToShow={3}
        >
          {middleData.map((v, i) => {
            return <MiddleMenuCard key={i} desc={v.desc} image={v.image} />;
          })}
        </Slider>
      </div>
    </>
  );
};
export default MiddleMenu;
