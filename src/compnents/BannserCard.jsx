const BannerCard = ({ image }) => {
  return (
    <div>
      <div className="h-[830px] -z-20">
        <img
          className="-mt-[230px] object-fill"
          src={`./images/${image}`}
          alt="{image}"
        />
      </div>
    </div>
  );
};
export default BannerCard;
