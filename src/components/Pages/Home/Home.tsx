import "../../../styles/components/Home.css";
import Landing from "./Landing.js"
import ProjectList from "./Projects/ProjectList.js";
import ScrollToAnchor from "../../utils/ScrollToAnchor.tsx"
function Home() {

  return (
    <>
    <section id="landing">
      <Landing />
    </section>

    <ProjectList />
    <ScrollToAnchor />
    </>
  );
}

export default Home;
