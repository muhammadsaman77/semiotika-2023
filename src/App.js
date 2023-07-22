import About from "./components/about/index";
import Footer from "./components/footer/index";
import Landing from "./components/hero/index";
import Navbar from "./components/navbar";
import Registration from "./components/registration/index";
import TheConference from "./components/the_conference/index";
import AuthorGuideline from "./components/author-guideline";
import TimeLine from "./components/timeline/index";
import TopicsList from "./components/topics/index";
import Location from "./components/location/index";
import Speakers from "./components/speakers/index";

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
      <AuthorGuideline />
      <Registration />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
