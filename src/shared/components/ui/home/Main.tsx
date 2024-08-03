import { motion } from "framer-motion";
import { notify } from "../../../lib/utils";
import { baseAnimation, scaleAnimation } from "../../../lib/animations";
import { Container } from "../Container";

export const Main = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      className="my-12 sm:my-6"
    >
      <Container>
        <div className="flex lg:flex-col gap-4 justify-between">
          <div className="flex flex-col gap-[154px] md:gap-[72px] max-w-[933px] bg-black rounded-[32px] text-white pt-[72px] px-8 pb-8 lg:px-6 lg:py-8">
            <motion.h1
              className="big-title"
              custom={1}
              variants={baseAnimation(-100, -100)}
            >
              ELEVATE YOUR <span className="relative z-[3] ">WORKSPACE</span>{" "}
              WITH{" "}
              <span className="relative z-[2] text-center before:content-[url('/images/main.svg')] sm:before:content-[url('/images/main-sm.svg')] before:absolute before:top-[-16%] before:left-[8%] before:z-[-1]  lg:before:top-[38%] lg:before:left-[-118%]">
                COWORK
              </span>
            </motion.h1>
            <div className="flex justify-between items-center md:flex-col-reverse md:gap-12 md:items-start">
              <motion.div custom={2} variants={baseAnimation(-100, 0)}>
                <button
                  className="bg-accent py-8 px-12 rounded-full text-[20px] font-bold md:w-full btn-animate"
                  onClick={() => notify("You`re cliaim!")}
                >
                  Claim Your Spot
                </button>
              </motion.div>
              <motion.div custom={3} variants={baseAnimation(0, 100)}>
                <p className="max-w-[360px] subheading relative before:content-[''] before:absolute before:top-[-8px] before:bg-white before:w-[55%] before:h-[1px] sm:before:w-[60%]">
                  WHERE INNOVATION MEETS COLLABORATION 🚀
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div className="h-full" custom={4} variants={scaleAnimation}>
            <picture>
              <source
                srcSet="/images/main-image-sm.jpg"
                media="(max-width: 1024px)"
              />
              <img className="w-full" src="/images/main-image.jpg" />
            </picture>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};
