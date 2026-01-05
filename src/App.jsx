import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Collaboration from "./components/Collaboration";
import WorkExperience from "./components/WorkExperience";
import Roadmap from "./components/Roadmap";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen bg-n-8 text-n-1 overflow-hidden">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Collaboration />
        <WorkExperience />
        <Roadmap />
        <Benefits />
        <Services />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
