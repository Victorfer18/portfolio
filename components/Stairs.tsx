import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const total = 6;
  return total - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit={"exit"}
          transition={{ duration: 0.4, delay: reverseIndex(index) * 0.1 }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
