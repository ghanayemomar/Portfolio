import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Section Title (same as Certificates) */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I WORK WITH</p>
        <h2 className={styles.sectionHeadText}>SKILLS.</h2>
      </motion.div>

      {/* Balls */}
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// give it an id so navbar can link to it like #skills
export default SectionWrapper(Tech, "skills");
