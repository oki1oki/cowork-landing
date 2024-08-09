import { Container } from "../Container";
import { trustedImgs } from "../../../constants";

export const Trusted = () => {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <h4 className="subtitle text-primary text-center mb-6">
          TRUSTED BY LEADING COMPANIES
        </h4>
        <div className="mx-auto max-w-[996px] overflow-hidden flex space-x-12 whitespace-nowrap">
          <div className="flex space-x-12 h-full animate-loop-scroll">
            {trustedImgs.map((img, i) => (
              <img className="h-8 max-w-none" src={img} key={i} />
            ))}
          </div>
          <div className="flex space-x-12 h-full animate-loop-scroll">
            {trustedImgs.map((img, i) => (
              <img className="h-8 max-w-none" src={img} key={i + 10} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
