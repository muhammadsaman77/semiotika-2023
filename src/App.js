import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
