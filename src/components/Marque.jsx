import { motion } from "framer-motion";
import PropTypes from "prop-types";

function MotionHeading({ children }) {
  return (
    <motion.h1
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className="text-9xl leading-none font-semibold uppercase p-4"
    >
      {children}
    </motion.h1>
  );
}

MotionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

function Marque() {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-cyan-700">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <MotionHeading>Welcome to my profile</MotionHeading>
        <MotionHeading>Welcome to my profile</MotionHeading>
      </div>
    </div>
  );
}

export default Marque;
