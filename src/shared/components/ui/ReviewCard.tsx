import { FC } from "react";
import { cn } from "../../lib/utils";

interface Props {
  img: string;
  name: string;
  job: string;
  text: string;
  bg: number;
  mt?: string;
}

export const ReviewCard: FC<Props> = ({ img, name, job, text, bg, mt }) => (
  <div
    className={cn(
      "bg-secondary text-black rounded-3xl sm:rounded-2xl p-8 sm:py-4 sm:px-6 flex flex-col items-center justify-between gap-6 text-center max-w-[360px] sm:max-w-[300px]",
      { "bg-primary": bg, "text-white": bg },
      `${mt}`
    )}
  >
    <img className="rounded-full" src={img} />
    <p className="paragraph">{text}</p>
    <div>
      <h4 className="subtitle uppercase">{name}</h4>
      <p className="text-xs">{job}</p>
    </div>
  </div>
);
