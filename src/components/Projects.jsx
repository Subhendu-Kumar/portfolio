import Accordino from "./Accordino";
import projectData from "../scripts/ProjectsData";
import { useEffect } from "react";
import gsap from "gsap";

function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".projectElem");
    elements.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        let diff = e.clientY - element.getBoundingClientRect().top;
        gsap.to(element.querySelector("img"), {
          opacity: 1,
          ease: "power1",
          top: diff,
          left: e.clientX,
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element.querySelector("img"), {
          opacity: 0,
          ease: "power1",
        });
      });
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="w-full p-20 border-t-2 border-stone-600 overflow-hidden">
      <h1 className="text-[3vw] mb-10 font-bold uppercase text-center">
        Projects !
      </h1>
      {projectData.map((data, index) => {
        return (
          <div
            key={index}
            className="projectElem w-full border-t-2 border-[#738146] p-2 relative"
          >
            <img
              src={data.projectImg}
              alt={`${data.projectName} image`}
              className="w-60 absolute opacity-0 z-[999]"
            />
            <div className="flex font-semibold items-center justify-between">
              <h1 className="uppercase text-[4vw] flex items-center">
                <p className="text-[#049472]">{index + 1}.&nbsp;</p>
                <p className="text-blue-100">{data.projectName}</p>
              </h1>
              <h3>{data.projectDate}</h3>
              <div className="px-5 py-1 border-[1px] rounded-xl border-zinc-300 text-lg flex gap-2 justify-center font-normal items-center">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </div>
            </div>
            <Accordino item={data} />
          </div>
        );
      })}
      <div className="w-full h-20 border-t-2 border-[#738146] p-5 items-center text-xl font-semibold flex justify-between">
        <p className="text-[#e39e4f]">Total Projects Completed : {projectData.length}</p>
        <p className="text-[#e39e4f]">More Are Comming......</p>
      </div>
    </div>
  );
}

export default Projects;
