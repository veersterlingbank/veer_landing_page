import Section1BG from "assets/images/about-sec-1-bg.webp";
import Section1BGMobile from "assets/images/about-sec-1-bg-mobile.webp";

const Section1 = () => {
  return (
    <div className="bg-[#12131A]">
      <div className="max-w-[1350px] m-auto px-[2rem] pt-[13rem] pb-[4rem]">
        <h1 className="font-qanelas_b text-[36px] lg:text-[56px] leading-[44px] lg:leading-[69px] text-white">
          Our mission is to create safer, more confident drivers by combining
          immersive simulator exercises, data-driven driver behavior tracking,
          and an intuitive Learning Management System (LMS). 
        </h1>
      </div>
      <div>
        <img
          src={Section1BG}
          alt="cars on highway"
          className="hidden md:block"
        />
        <img
          src={Section1BGMobile}
          alt="cars on highway"
          className="md:hidden"
        />
      </div>
    </div>
  );
}

export default Section1;