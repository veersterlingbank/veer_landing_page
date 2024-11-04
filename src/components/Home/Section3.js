import Section3Img from "assets/images/section-3-img.webp";

const Section3 = () => {
  return (
    <div className="bg-[#12131A]">
      <div className=" max-w-[1350px] m-auto py-[6rem] border-b-[#ffffff2d]">
        <img src={Section3Img} alt="" />
        <h2 className="font-qanelas_b text-[35px] leading-[44px] w-[80%] mx-auto mt-[5rem]">
          In today’s fast-paced transportation world, your drivers are the
          backbone of your business. But keeping them skilled, safe, and
          compliant with ever-changing regulations can be a challenge. That’s
          where we come in.
        </h2>
      </div>
    </div>
  );
};

export default Section3;