import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Eye({ rotate }) {
  return (
    <div className="w-[13vw] h-[13vw] flex justify-center items-center rounded-full bg-zinc-100">
      <div className="w-2/4 h-2/4 rounded-full relative bg-zinc-900">
        <div
          style={{
            transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
          }}
          className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
        >
          <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
  );
}

Eye.propTypes = {
  rotate: PropTypes.number.isRequired,
};

function Eyesplay() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="w-full h-full bg-cover bg-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-20">
          <Eye rotate={rotate} />
          <Eye rotate={rotate} />
        </div>
      </div>
    </div>
  );
}

export default Eyesplay;
