import { useState } from "react";
import PropTypes from "prop-types";

function Accordino({ item }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <div
        className="py-1 text-lg font-normal items-center flex justify-between"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div className="flex items-center gap-4">
          <p className="uppercase">Crafted with :</p>
          {item.craftedWith.map((data, index) => {
            return <p className="capitalize" key={index}>{data}</p>;
          })}
        </div>
        <svg
          className="fill-zinc-300 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-base text-zinc-200 flex">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

Accordino.propTypes = {
  item: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectDate: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    craftedWith: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Accordino;
