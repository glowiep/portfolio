import Quote from "../Quote.jsx";
import { Flex, Text, Box } from "@chakra-ui/react";
import Project from "./Project.js";

import { projectList } from "../../../../constants/projectList.js";

function ProjectList() {
  return (
    <section id="project-list">
      <Quote />
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
        <Box pt="60px">
          <Text
            bg="white"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            paddingBottom="1.5em"
          >
            My Projects
          </Text>
        </Box>
        {projectList.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageURL={project.imageURL}
              live={project.live}
              liveURL={project.liveURL}
              githubURL={project.githubURL}
              stack={project.stack}
            />
          );
        })}
      </Flex>
    </section>
  );
}

export default ProjectList;
