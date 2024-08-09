import { Toaster } from "react-hot-toast";
import { Layout } from "../ui/Layout";
import {
  Hero,
  Trusted,
  Features,
  Statistics,
  Tour,
  CallToAction,
  Reviews,
  FAQ,
  BlogPreview,
} from "../ui/sections";

const Home = () => (
  <>
    <Layout>
      <Hero />
      <Trusted />
      <Features />
      <Tour />
      <Statistics />
      <Reviews />
      <FAQ />
      <CallToAction />
      <BlogPreview />
    </Layout>
    <Toaster />
  </>
);

export default Home;
