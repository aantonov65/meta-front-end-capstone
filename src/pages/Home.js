import About from "../modules/about/About";
import Hero from "../modules/hero/Hero";
import Specials from "../modules/specials/Specials";
import Testimonials from "../modules/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;
