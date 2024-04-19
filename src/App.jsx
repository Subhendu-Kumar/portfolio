import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyesplay from "./components/Eyesplay";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-r from-stone-800 from-5% via-sky-900 via-50% to-stone-800 to-95%">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyesplay />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
