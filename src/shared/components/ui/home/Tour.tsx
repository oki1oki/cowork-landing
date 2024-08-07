import { notify } from "../../../lib/utils";
import { Container } from "../Container";

export const Tour = () => (
  <section className="my-[72px] md:my-12">
    <Container>
      <div className="bg-primary grid gap-[64px] md:gap-6 pt-[72px] px-8 md:p-6 grid-cols-2 items-end rounded-[32px] sm:rounded-3xl text-white md:min-h-[590px]">
        <h1 className="big-title max-w-[417px]">VIRTUAL TOUR</h1>
        <div className="flex justify-self-end gap-6 lg:flex-col md:col-span-2 md:order-last">
          <p className="paragraph max-w-[272px] md:max-w-full">
            Our immersive 📺 video tour gives you a sneak peek into the vibrant
            atmosphere that define the Cowork experience.
          </p>
          <button
            className="py-8 px-12 bg-white rounded-full border border-black  btn-animate text-[20px] text-black font-bold"
            onClick={() => notify("Explore!")}
          >
            Explore Spaces
          </button>
        </div>
        <div className="col-span-2 mx-[-32px] md:mx-[-24px]">
          <img className="rounded-[32px] w-full" src="/images/tour.jpg" />
        </div>
      </div>
    </Container>
  </section>
);
