import Slider from "react-slick";
import BannerCard from "./BannserCard";

const bannerData = [
  {
    image: "order.jpg",
  },
  {
    image: "mama.webp",
  },
  {
    image: "eat.webp",
  },
  {
    image: "baby.jpg",
  },
];
const Banner = () => {
  return (
    <div className="h-[600px] ">
      <ul>
        <Slider autoplay={true} autoplaySpeed={4000} dots={false}>
          {bannerData.map((v, i) => {
            return <BannerCard key={i} image={v.image} />;
          })}
        </Slider>
      </ul>
    </div>
  );
};
export default Banner;
