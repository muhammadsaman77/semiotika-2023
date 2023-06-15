import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import TheConference from "./components/TheConference";
import TimeLine from "./components/Timeline";
import TopicsList from "./components/TopicList";
import Location from "./components/Location";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Landing />
      <About />
      <TheConference />
      <TopicsList />
      <Speakers />
      <TimeLine />
      <Registration />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
