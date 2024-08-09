import { Link } from "react-router-dom";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="my-8">
      <Container>
        <div className="rounded-[32px] bg-black py-12 px-8 sm:py-8 mb-8 sm:rounded-[24px] flex gap-32 lg:gap-10 md:gap-4 sm:flex-col sm:items-center sm:text-center text-white  justify-between">
          <div className="max-w-[500px] lg:max-w-[350px] md:w-[250px]">
            <img src="/images/logo-dark.svg" alt="logo" className="sm:m-auto" />
            <p className="mt-4 small">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="my-6 flex gap-6 md:flex-col sm:flex-col ">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b outline-none p-3 min-w-[350px] lg:min-w-10 sm:min-w-full"
              />
              <button
                type="button"
                className="bg-white text-black rounded-full px-6 py-3 font-semibold btn-animate"
              >
                Subscribe
              </button>
            </form>
            <p className="small">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 lg:gap-6 *:min-w-[212px] lg:*:min-w-[100px] md:*:w-[50px] sm:grid-cols-1 sm:text-nowrap">
            <div>
              <h4 className="subtitle mb-4 sm:mb-2">EXPLORE MORE</h4>
              <ul className="small">
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
            </div>
            <div>
              <h4 className="subtitle mb-4 sm:mb-2">STAY CONNECTED</h4>
              <ul className="small cursor-pointer">
                <li className="hover:opacity-70">Subscribe</li>
                <li className="hover:opacity-70 leading-normal">
                  Member Stories
                </li>
                <li className="hover:opacity-70">Locations</li>
                <li className="hover:opacity-70">Write for Us</li>
              </ul>
            </div>
            <div>
              <h4 className="subtitle mb-4 sm:mb-2">FOLLOW US</h4>
              <ul className="small cursor-pointer">
                <li className="hover:opacity-70">Facebook</li>
                <li className="hover:opacity-70">Instagram</li>
                <li className="hover:opacity-70">X</li>
                <li className="hover:opacity-70">LinkedIn</li>
                <li className="hover:opacity-70">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between sm:flex-col gap-4 small">
          <p>© 2024 Cowork. All rights reserved.</p>
          <div className="flex justify-between gap-6 *:underline *:cursor-pointer">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
