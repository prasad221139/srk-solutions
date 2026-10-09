import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home-layout">
      <Hero />
      <Services />
      <div>
        <WhyChooseUs />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
