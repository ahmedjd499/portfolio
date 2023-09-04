import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
