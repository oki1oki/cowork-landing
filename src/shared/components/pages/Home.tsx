import { Toaster } from "react-hot-toast";
import { Layout } from "../ui/Layout";
import {
  Hero,
  Trusted,
  Features,
  Statistics,
  Tour,
  CallToAction,
} from "../ui/home";
import { Reviews } from "../ui/home/Reviews";

const Home = () => (
  <>
    <Layout>
      <Hero />
      <Trusted />
      <Features />
      <Tour />
      <Statistics />
      <Reviews />
      <CallToAction />
    </Layout>
    <Toaster />
  </>
);

export default Home;
