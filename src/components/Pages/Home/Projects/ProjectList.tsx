import Quote from "../Quote.tsx";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Project from "./Project.js";

import { projectList } from "../../../../constants/projectList.js";

function ProjectList() {
  return (
    <section>
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
        <Box pt="60px" 
        padding={{ base: "10%", md: "5%"}}
        width="full"
        textAlign="center"
        border="solid"
        >
          <Heading size='lg' fontWeight="extrabold" fontSize={{base: '4xl', md: '6xl'}} >My Projects</Heading>
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
      <Quote />
    </section>
  );
}

export default ProjectList;
