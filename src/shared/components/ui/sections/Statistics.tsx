import { motion } from "framer-motion";
import { Container } from "../Container";
import { baseAnimation } from "../../../lib/animations";

export const Statistics = () => {
  return (
    <section className="my-[72px] md:my-12">
      <Container className="flex justify-between lg:items-center lg:flex-col gap-8">
        <motion.div
          className="bg-secondary rounded-[32px] border-[5px] max-w-[736px] border-dashed border-primary px-8 py-[89px] lg:px-6 lg:py-8"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={baseAnimation(-200, 0)}
          viewport={{ amount: 0.4, once: true }}
        >
          <h4 className="subtitle text-primary">COWORK IN NUMBERS</h4>
          <h2 className="title text-primary mt-4 mb-8">
            Transformative Statistics That Speak Volumes{" "}
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <h2 className="title text-primary">240%</h2>
              <p className="paragraph">Community Growth</p>
            </div>
            <div className="">
              <h2 className="title text-primary">99%</h2>
              <p className="paragraph">Technology Uptime</p>
            </div>
            <div className="">
              <h2 className="title text-primary">50+</h2>
              <p className="paragraph">Happy Members</p>
            </div>
            <div className="">
              <h2 className="title text-primary">100%</h2>
              <p className="paragraph">Renewable Energy Sources</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:flex lg:justify-center"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={baseAnimation(200, 0)}
          viewport={{ amount: 0.4, once: true }}
        >
          <img src="/images/hero.jpg" alt="" />
        </motion.div>
      </Container>
    </section>
  );
};
