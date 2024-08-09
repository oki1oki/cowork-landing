import { Accordion } from "../Accordion";
import { Container } from "../Container";

export const FAQ = () => (
  <section className="my-[72px] md:my-12">
    <Container className="flex gap-4 md:flex-col md:gap-8 text-black">
      <div className="flex flex-col justify-between md:gap-6">
        <div className="space-y-4">
          <p className="subtitle text-primary">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="title">Your Roadmap to Coworking Clarity</h2>
        </div>
        <p className="paragraph max-w-[391px] md:max-w-full">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {[...Array(5)].map((i) => (
          <Accordion
            key={i}
            title="How flexible are Cowork's membership plans?"
            content="Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered."
          />
        ))}
      </div>
    </Container>
  </section>
);
