import "../../../styles/components/Home.css";
import Landing from "./Landing.js"
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
