import { useRef, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "@siberiacancode/reactuse";
import { reviewsData } from "../../../constants";
import { Container } from "../Container";
import { ReviewCard } from "../ReviewCard";
import "slick-carousel/slick/slick.css";
import { cn } from "../../../lib/utils";

const sliderSettings = {
  infinite: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};

export const Reviews = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
          </div>
          {isSlider && (
            <div className="flex justify-end gap-4 mb-6">
              <button
                disabled={activeSlide === 0}
                className={cn("px-1 py-1.5", {
                  "opacity-50": activeSlide === 0,
                })}
                onClick={() => {
                  setActiveSlide(activeSlide - 1);
                  slider.current?.slickPrev();
                }}
              >
                <img src="/images/arrow.svg" alt="" />
              </button>
              <button
                disabled={activeSlide === 4}
                className={cn("px-1 py-1.5 rotate-180", {
                  "opacity-50": activeSlide === 4,
                })}
                onClick={() => {
                  setActiveSlide(activeSlide + 1);
                  slider.current?.slickNext();
                }}
              >
                <img src="/images/arrow.svg" alt="" />
              </button>
            </div>
          )}
          {isSlider ? (
            <Slider ref={slider} {...sliderSettings}>
              {reviewsData.map((item, i) => (
                <div key={i} className="!flex justify-center">
                  <ReviewCard {...item} mt="" />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-16">
              {reviewsData.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
