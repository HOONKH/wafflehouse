import "animate.css";

const MiddleMenuCard = ({ image, desc }) => {
  return (
    <div className=" animate-bounce justify-center flex flex-col items-center mt-24 max-w-screen mx-auto ">
      <img className="" src={`./images/${image}`} alt="burger" />
      <ul className="h-[76px] w-[460px] bg-black flex justify-center items-center  ">
        <li className="text-white fonthouse">{desc}</li>
      </ul>
    </div>
  );
};
export default MiddleMenuCard;
