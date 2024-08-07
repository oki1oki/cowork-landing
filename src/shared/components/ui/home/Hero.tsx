import { motion } from "framer-motion";
import { notify } from "../../../lib/utils";
import { baseAnimation, scaleAnimation } from "../../../lib/animations";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="my-12 sm:my-6"
      viewport={{ once: true }}
    >
      <Container>
        <div className="flex lg:flex-col gap-4 justify-between ">
          <div className="flex flex-col gap-[154px] md:gap-[72px] max-w-[933px] lg:self bg-black rounded-[32px] text-white pt-[72px] px-8 pb-8 lg:px-6 lg:py-8">
            <motion.h1
              className="big-title z-[2]"
              custom={1}
              variants={baseAnimation(-100, -100)}
            >
              ELEVATE YOUR WORKSPACE WITH{" "}
              <span className="relative after:content-[url('/images/main.svg')] md:after:content-[url('/images/main-sm.svg')] after:absolute after:top-[-16px] sm:after:left-0 after:left-10 after:z-[-1]">
                COWORK
              </span>
            </motion.h1>
            <div className="flex justify-between items-center md:flex-col-reverse md:gap-12 md:items-start">
              <motion.div
                className="w-full"
                custom={2}
                variants={baseAnimation(-100, 0)}
              >
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
          <motion.div
            className="h-full"
            custom={4}
            variants={scaleAnimation}
            viewport={{ amount: 0.6 }}
          >
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
    </motion.section>
  );
};
