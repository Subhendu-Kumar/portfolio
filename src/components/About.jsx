import { FaArrowUpLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import skillData from "../scripts/Skills";
import VisitMeLinks from "./VisitMeLinks";

function About() {
  return (
    <div className="w-full p-20 border-b-2 border-t-2 border-stone-600">
      <h1 className="text-[3vw] font-bold uppercase text-center">About Me ?</h1>
      <h1 className="text-[1.5vw] text-center mt-8">
        Hello there! 👋 I&#39;m Subhendu, a dynamic and passionate student
        pursuing Bachelor&#39;s in Computer Science and Engineering,
        specializing in Full Stack Web Development, Java programming, and System
        Design. With expertise in HTML, CSS, JavaScript, Java, and frameworks
        like React, Tailwind, Gsap etc. I specialize in pioneering innovative
        solutions and leveraging emerging technologies to seamlessly transform
        abstract concepts into both functional and visually captivating
        applications.
      </h1>
      <div className="w-full border-t-[2px] border-[#738146] mt-14"></div>
      <div className="flex mt-12">
        <h2 className="w-[20vw] text-[1.4vw]">What you can expect :</h2>
        <div className="w-[60vw] flex justify-center items-center flex-wrap gap-8">
          {skillData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-[50vw] h-20 bg-[#082535] p-3 flex items-center gap-6 rounded-2xl border-2 border-zinc-400"
              >
                <img
                  src={data.skillLogo}
                  alt="react loogo"
                  className="w-[3rem]"
                />
                <div>
                  <h1 className="text-2xl font-bold">{data.skillText}</h1>
                  <p className="font-medium">{data.skillQuote}</p>
                </div>
              </div>
            );
          })}
        </div>
        <VisitMeLinks className="w-[20vw] p-2 text-[1.5vw] justift-center" />
      </div>
      <div className="w-full border-t-[2px] border-[#738146] mt-14"></div>
      <div className="mt-12 flex justify-between">
        <h1 className="text-[1.4vw]">To Know More :</h1>
        <div className="start flex items-center gap-4">
          <div className="px-5 py-1 border-[1px] rounded-full border-zinc-300 text-lg flex gap-2 justify-center font-normal items-center">
            <FaPhoneAlt />
            Contact
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-300 flex justify-center items-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong size="1.4em" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
