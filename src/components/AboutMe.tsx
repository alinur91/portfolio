import me2 from "../images/me2.jpeg";
import { PiMedalFill } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col items-center mt-72">
      <h3 className="text-slate-600 mb-1 lg:mb-4">Get To Know More</h3>
      <h1 className="text-3xl md:text-5xl font-bold">About me</h1>
      <div className="flex flex-col gap-10 xl:flex-row items-center justify-center mx-8 mt-4 lg:mt-12 xl:mt-20  lg:mx-40">
        <img className="rounded-3xl h-60 md:h-[280px] lg:h-[350px] " src={me2} alt="" />
        <div className="flex  flex-col  items-center">
          <div className="flex gap-10 mb-10">
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-neutral-400 rounded-[36px]  text-center py-6 px-2 md:px-[40px]  lg:px-24 xl:px-28">
              <PiMedalFill fontSize="32px" />
              <h3 className="font-bold text-lg">Experience</h3>
              <p className="text-gray-600">2+ years</p>
              <p className="text-gray-600">Frontend Development</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-neutral-400 rounded-[36px]  text-center py-6 px-2 md:px-[40px]  lg:px-24 xl:px-28">
              <SlPeople fontSize="32px" />
              <h3 className="font-bold text-lg">Education</h3>
              <p className="text-gray-600">IITU Bachelors Degree</p>
            </div>
          </div>
          <p className="text-gray-600">
            Frontend developer with a proven ability to adapt in both
            self-starting and collaborative environments while staying focused
            on achieving high-quality results under strict deadlines.Eager to
            obtain a challenging position at a prestigious companies that will
            expand my learning and build upon my developer skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
