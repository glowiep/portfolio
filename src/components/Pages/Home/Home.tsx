// import background from "/home/labber/myProjects/portfolio/gloria-lim-portfolio/portfolio/src/assets/images/gradient.svg"

import "../../../styles/components/Home.css";
import Landing from "./Landing.jsx"
import ProjectList from "./Projects/ProjectList.js";

function Home() {

  return (
    <>
    <section id="landing">
      <Landing />
    </section>

    <ProjectList />
    </>
  );
}

export default Home;
