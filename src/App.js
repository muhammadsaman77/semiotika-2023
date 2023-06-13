import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import TheConference from "./components/TheConference";
import TimeLine from "./components/Timeline";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Landing />
      <About />
      <TheConference />
      {/* <TimeLine /> */}
      <Footer />
    </div>
  );
}

export default App;
