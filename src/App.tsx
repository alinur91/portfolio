import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-100 px-5 sm:px-10 md:px-24 lg:px-28 2xl:px-40">
      <Header />
      <AboutMe />
      <Experience />
      <Projects/>
    </div>
  );
}

export default App;
