import { motion } from "framer-motion";
import { notify } from "../../../lib/utils";
import { Container } from "../Container";
import { baseAnimation, scaleAnimation } from "../../../lib/animations";

export const CallToAction = () => (
  <section className="my-[72px] md:my-12">
    <Container>
      <div className="bg-black rounded-[32px] py-[72px] px-8 md:p-6 text-white flex flex-col items-center text-center">
        <motion.h1
          className="big-title"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={baseAnimation(-100, 0)}
          viewport={{ amount: 0.3, once: true }}
        >
          SEIZE THE MOMENT JOIN COWORK TODAY!
        </motion.h1>
        <motion.p
          className="paragraph max-w-[639px] mt-6 mb-12"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={baseAnimation(100, 0)}
          viewport={{ amount: 0.3, once: true }}
        >
          Uncover the transformative power of Cowork as echoed by those who've
          made it their professional haven. This is more than finding a desk;
          it's discovering a community that fuels your journey to success.
        </motion.p>
        <motion.div
          className="w-full"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={scaleAnimation}
          viewport={{ amount: 0.3, once: true }}
        >
          <button
            className="py-8 px-12 md:w-full text-[20px] font-bold bg-accent rounded-full btn-animate"
            onClick={() => notify("Let`s claim!")}
          >
            Claim Your Spot
          </button>
        </motion.div>
      </div>
    </Container>
  </section>
);
