import { motion } from "framer-motion";
import { forwardRef } from "react";

interface Props {
  item: {
    img: string;
    title: string;
    description: string;
  };
}

const FeatureCard = forwardRef<HTMLDivElement, Props>(({ item }, ref) => {
  const { img, title, description } = item;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center border border-black rounded-[32px] p-8 sm:p-6"
    >
      <div className="w-12 aspect-square flex items-center justify-center">
        <img src={img} />
      </div>
      <h3 className="mini-title my-6">{title}</h3>
      <p className="paragraph">{description}</p>
    </motion.div>
  );
});

export const MFeatureCard = motion(FeatureCard);
