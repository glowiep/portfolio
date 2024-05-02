import Quote from "../Quote.tsx";
import { Flex, Box, Heading } from "@chakra-ui/react";
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
          <Heading size='lg' fontWeight="extrabold" fontSize={{base: '5xl', md: '6xl'}} >My Projects</Heading>
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
