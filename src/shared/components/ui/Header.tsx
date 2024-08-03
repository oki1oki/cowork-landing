import { Container } from "./Container";
import { Link } from "react-router-dom";
import { cn, notify } from "../../lib/utils";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    document.querySelector("#root")?.classList.toggle("overflow-y-hidden");
  };

  return (
    <header className="mt-6">
      <Container className="flex items-center justify-between py-7 border-y border-y-black">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <button
          onClick={toggleOpen}
          className="hidden flex-col gap-1 bg-black rounded-[42px] px-[18px] py-[13.5px] *:bg-white  *:w-6 *:h-[2px] *:block *:rounded-md md:flex"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={cn(
            "flex items-center justify-between gap-12 md:invisible md:absolute md:right-[-760px] md:h-full md:w-full transition-all",
            isOpen &&
              "!right-0 md:visible bg-black text-white text-[32px] top-0 flex-col justify-start gap-[50px] pt-[14px] pb-6 px-5 z-10"
          )}
        >
          <div className="hidden md:flex items-center justify-between w-full">
            <Link to="/" onClick={toggleOpen}>
              <img src="/images/logo-dark.svg" alt="" />
            </Link>
            <button
              className="*:bg-white *:h-[2px] *:w-5 *:block p-5 relative *:absolute grid place-items-center"
              onClick={toggleOpen}
            >
              <span className="rotate-45"></span>
              <span className="rotate-[-45deg]"></span>
            </button>
          </div>
          <nav className="md:w-full">
            <ul className="flex items-center justify-between gap-12 font-medium md:flex-col md:gap-8 md:!items-start">
              <Link to="about">
                <li className="hover:opacity-70">About</li>
              </Link>
              <Link to="pricing">
                <li className="hover:opacity-70">Pricing</li>
              </Link>
              <Link to="contact">
                <li className="hover:opacity-70">Contact</li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-6 font-semibold *:rounded-full *:px-6 *:py-3 md:text-base md:absolute md:right-6 md:bottom-5">
            <button
              className="border border-black btn-animate md:bg-white md:text-black"
              onClick={() => notify("You`re login!")}
            >
              Log In
            </button>
            <button
              className="text-white bg-primary btn-animate"
              onClick={() => notify("You`re signup!")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
