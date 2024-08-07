import { reviewsData } from "../../../constants";
import { Container } from "../Container";
import { ReviewCard } from "../ReviewCard";
import Slider from "react-slick";
import { useMediaQuery } from "@siberiacancode/reactuse";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const sliderSettings = {
  infinite: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Reviews = () => {
  const isSlider = useMediaQuery("(max-width: 884px)");
  const slider = useRef<Slider>(null);

  return (
    <section className="my-[72px] md:my-12">
      <Container>
        <div className="bg-black rounded-[32px] sm:rounded-3xl text-white py-[72px] px-8 sm:p-6">
          <div className="flex justify-between md:flex-col md:items-start gap-4 items-end mb-8 sm:mb-6">
            <h1 className="big-title max-w-[683px]">
              HEAR IT FROM OUR CLIENTS
            </h1>
            <p className="subheading before:content-[''] relative before:bg-white before:absolute before:w-[85%] before:h-[1px] before:top-[-8px]">
              COWORK IN WORDS
            </p>
            {isSlider && (
              <>
                <button onClick={() => slider?.current?.slickPrev()}>
                  Prev
                </button>
                <button onClick={() => slider?.current?.slickNext()}>
                  Next
                </button>
              </>
            )}
          </div>
          {isSlider ? (
            <Slider ref={slider} {...sliderSettings}>
              {reviewsData.map((item) => (
                <ReviewCard {...item} mt="" />
              ))}
            </Slider>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-16">
              {reviewsData.map((item) => (
                <ReviewCard {...item} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
