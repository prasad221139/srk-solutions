import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className="page-content">
        <Services />
        <div className="support-sections">
          <WhyChooseUs />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
