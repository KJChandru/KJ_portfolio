import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Headline = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mx-auto max-w-2xl my-12"
    >
      <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold tracking-wide text-primary mb-2">{title}</h2>
      <div className="divider bg-primary mx-auto mb-8 h-1 w-20"></div>
      <p className="text-lg md:text-xl text-black leading-7">{subtitle}</p>
    </motion.div>
  );
};

export default Headline;
