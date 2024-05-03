import Quote from "../Quote.tsx";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Project from "./Project.js";

import { projectList } from "../../../../constants/projectList.js";
import GithubStats from "../../../Content/GithubStats.tsx";

function ProjectList() {
  return (
    <section>
      {/* My Projects */}
      <Flex
        direction="column" 
        justifyContent="center"
        alignItems="center" 
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

      {/* Github Stats */}
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="2em"
        // paddingBottom="5em"
      >
        <GithubStats />
        <img src="https://ghchart.rshah.org/glowiep" alt="My Github chart" />
      
        <Quote />
      </Flex>
    </section>
  );
}

export default ProjectList;
