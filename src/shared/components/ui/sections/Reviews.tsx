import { useRef, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "@siberiacancode/reactuse";
import { reviewsData } from "../../../constants";
import { Container } from "../Container";
import { ReviewCard } from "../ReviewCard";
import { cn } from "../../../lib/utils";
import "slick-carousel/slick/slick.css";

interface ArrowButtonProps {
	disabled: boolean;
	onClick: () => void;
	isRotated?: boolean;
	children: React.ReactNode;
}

const MAX_SLIDES = 4;

const sliderSettings = {
	infinite: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	waitForAnimate: false,
};

const ArrowButton = ({
	disabled,
	onClick,
	isRotated,
	children,
}: ArrowButtonProps) => (
	<button
		disabled={disabled}
		className={cn("px-1 py-1.5", {
			"opacity-50": disabled,
			"rotate-180": isRotated,
		})}
		onClick={onClick}
	>
		{children}
	</button>
);

const Reviews = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const isSlider = useMediaQuery("(max-width: 884px)");
	const slider = useRef<Slider | null>(null);

	const handlePrevSlide = (): void => {
		setActiveSlide((prev) => prev - 1);
		slider.current?.slickPrev();
	};

	const handleNextSlide = (): void => {
		setActiveSlide((prev) => prev + 1);
		slider.current?.slickNext();
	};

	const sliderSettingsWithCallback = {
		...sliderSettings,
		afterChange: (current: number) => setActiveSlide(current),
	};

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
							<ArrowButton
								disabled={activeSlide === 0}
								onClick={handlePrevSlide}
							>
								<img
									src="/images/arrow.svg"
									alt="Previous slide"
								/>
							</ArrowButton>
							<ArrowButton
								disabled={activeSlide === MAX_SLIDES}
								onClick={handleNextSlide}
								isRotated
							>
								<img src="/images/arrow.svg" alt="Next slide" />
							</ArrowButton>
						</div>
					)}

					{isSlider ? (
						<Slider ref={slider} {...sliderSettingsWithCallback}>
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

export { Reviews };
