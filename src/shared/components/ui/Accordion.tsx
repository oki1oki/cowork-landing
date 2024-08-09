import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { cn } from "../../lib/utils";

interface Props {
  title: string;
  content: string;
}

export const Accordion: FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        "rounded-[32px] md:rounded-3xl border border-black p-9 pb-4 md:p-6 md:text-start",
        {
          "pb-9": isOpen,
        }
      )}
    >
      <button
        className="w-full font-bold flex justify-between items-center text-start mb-5"
        onClick={toggleAccordion}
      >
        <p className="w-[80%]">{title}</p>
        <span className="rounded-full border border-black flex justify-center items-center w-8 h-8">
          <img
            className={cn({ "rotate-180": isOpen })}
            src="/images/accordion-arrow.svg"
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="open"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, height: 0 },
              open: { opacity: 1, height: "auto" },
            }}
            className="overflow-hidden paragraph"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
