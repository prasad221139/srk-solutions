import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Clients from "../components/Clients/Clients";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className="page-content">
        <Services />
        <div className="support-sections">
          <div className="support-information">
            <WhyChooseUs />
          </div>
          <Contact />
        </div>
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default Home;
