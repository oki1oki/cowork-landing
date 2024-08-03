import { advantegeData } from "../../../constants";
import { AdvantageCard } from "../AdvantageCard";
import { Container } from "../Container";

export const Advantage = () => {
  return (
    <section className="py-[72px] px-4 md:py-12">
      <Container>
        <h2 className="text-center title mb-20 md:mb-8">Why Choose Cowork?</h2>
        <div className="text-center grid grid-cols-3 gap-4 md:grid-cols-1">
          {advantegeData.map((item, i) => (
            <AdvantageCard item={item} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};
