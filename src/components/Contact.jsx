import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
// import { EarthCanvas } from "./canvas"; // ⬅️ commented
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="w-full max-w-xl bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-12 flex flex-col gap-8">
          {/* Email */}
          <div className="bg-tertiary p-6 rounded-xl hover:scale-[1.02] transition">
            <p className="text-secondary text-sm mb-2">Email</p>
            <a
              href="mailto:omar.mohd.ghanayem@gmail.com"
              className="text-white text-lg font-semibold"
            >
              omar.mohd.ghanayem@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-tertiary p-6 rounded-xl hover:scale-[1.02] transition">
            <p className="text-secondary text-sm mb-2">Phone</p>
            <a
              href="tel:+359877840860"
              className="text-white text-lg font-semibold"
            >
              +359 87 784 0860
            </a>
          </div>
        </div>
      </motion.div>

      {/*
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
