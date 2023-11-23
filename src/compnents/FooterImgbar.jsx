import FooterImg from "./FooterImg";

const FootData = [
  { image: "foot1", desc: "📍Arrived." },
  {
    image: "foot2",
    desc: "Don’t ask me to be your +1 unless there’s Waffle ...",
  },
  {
    image: "foot3",
    desc: "🎶opened up my eyes, I saw the sign🎶good ...",
  },
  {
    image: "foot4",
    desc: "CLOSED: 🥓GIVEAWAY🥓 Can you guess how many strips ...",
  },
  {
    image: "rasin5",
    desc: "If you haven’t tried our Raisin Toast, it’s time ...",
  },
  {
    image: "foot6",
    desc: "Happy Halloween 👻 🧇",
  },
];

const FooterImgbar = () => {
  return (
    <div className="h-[399px] max-w-screen  grid grid-cols-6 justify-items-center pt-10 ">
      {FootData.map((v, i) => (
        <FooterImg key={i} image={v.image} desc={v.desc} />
      ))}
    </div>
  );
};
export default FooterImgbar;
