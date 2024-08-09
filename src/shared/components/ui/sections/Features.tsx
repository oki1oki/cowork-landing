import { motion } from "framer-motion";
import { advantegeData } from "../../../constants";
import { scaleAnimation } from "../../../lib/animations";
import { MFeatureCard } from "../FeatureCard";
import { Container } from "../Container";

export const Features = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="my-[72px] mx-4 md:my-12"
    >
      <Container>
        <motion.h2
          className="text-center title mb-20 md:mb-8"
          custom={1}
          variants={scaleAnimation}
        >
          Why Choose Cowork?
        </motion.h2>
        <motion.div
          className="text-center grid grid-cols-3 gap-4 md:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          {advantegeData.map((item, i) => (
            <MFeatureCard
              item={item}
              key={i}
              custom={i}
              variants={scaleAnimation}
            />
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
};
