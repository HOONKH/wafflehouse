const FooterImg = ({ image, desc }) => {
  return (
    <div className="">
      <div className="h-[305px] w-[305px] flex flex-col justify-start items-center ">
        <img
          className="h-[305px] w-[305px] grow object-cover"
          src={`./images/${image}.jpg`}
          alt="f1"
        />
        <p className="h-[48px] w-[305px] text-center text-[12px] pt-4">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default FooterImg;
