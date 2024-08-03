import { FC } from "react";

interface Props {
  item: {
    img: string;
    title: string;
    description: string;
  };
}

export const AdvantageCard: FC<Props> = ({ item }) => {
  const { img, title, description } = item;

  return (
    <div className="flex flex-col items-center border border-black rounded-[32px] p-8 sm:p-6">
      <div className="w-12 aspect-square flex items-center justify-center">
        <img src={img} />
      </div>
      <h3 className="mini-title my-6">{title}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};
