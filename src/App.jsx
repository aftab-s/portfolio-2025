import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutMe from "./components/AboutMe";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ArrowUp from "./components/ArrowUp";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <ArrowUp />
        <AboutMe />
        <Collaboration />
        <WorkExperience />
        <Roadmap />
        <Benefits />
        <Services /> 
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
