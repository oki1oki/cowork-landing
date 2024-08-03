import { Toaster } from "react-hot-toast";
import { Layout } from "../ui/Layout";
import { Main } from "../ui/home/Main";
import { Trusted } from "../ui/home/Trusted";
import { Advantage } from "../ui/home/Advantage";
import { Hero } from "../ui/home/Hero";
const Home = () => (
  <>
    <Layout>
      <Main />
      <Trusted />
      <Advantage />
      <Hero />
    </Layout>
    <Toaster />
  </>
);

export default Home;
