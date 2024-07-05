import Boylogo from "/img/boy-programming.jpg";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="mt-48 px-20">
        {["Hello I'm", "Subhendu />", "Software Developer"].map(
          (data, index) => {
            return (
              <div
                key={index}
                className="masker leading-none text-[6.2vw] font-semibold tracking-tight"
              >
                <div className="w-fit flex items-center">
                  {index === 1 && (
                    <div className="mr-3 rounded-md w-[8vw] relative h-[4.3vw] overflow-hidden top-[0.35vw]">
                      <img src={Boylogo} alt="boy is programming" />
                    </div>
                  )}
                  <h1>{data}</h1>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-32 flex justify-between items-center py-5 px-20">
        {["Full Stack Developer", "System Designer"].map((data, index) => (
          <p key={index} className="font-normal tracking-tight text-lg">
            {data}
          </p>
        ))}
        <div className="start flex justify-center items-center gap-4">
          <div className="px-5 py-1 border-[1px] rounded-full border-zinc-300 text-lg flex gap-2 justify-center font-normal items-center">
            <FaWhatsapp />
            Whatsapp
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

export default LandingPage;
