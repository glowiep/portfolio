import Quote from "../Quote.jsx"
import { Flex, Text, Box } from '@chakra-ui/react'

function ProjectList() {
  return(
    <section id="project-list">
      <Quote />
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
        <Box pt="60px">
          <Text bg="white" bgClip="text" fontSize="6xl" fontWeight="extrabold">
            My Projects
          </Text>
        </Box>
      </Flex>
    </section>
  )
}

export default ProjectList;