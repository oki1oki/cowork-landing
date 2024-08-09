import { FC } from "react";

interface Props {
  title: string;
  img: string;
  time: number;
  category: string;
}

export const BlogCard: FC<Props> = ({ title, img, time, category }) => (
  <div className="cursor-pointer">
    <img className="rounded-3xl w-full" src={img} />
    <div className="mt-6 mb-4 flex gap-4 md:mt-4">
      <span className="py-1 px-2 rounded-lg border border-black font-semibold text-sm">
        {category}
      </span>
      <p className="small">{time} min read</p>
    </div>
    <h3 className="mini-title">{title}</h3>
  </div>
);
