import { Text, Box, Flex, Avatar } from "@chakra-ui/react";

function AboutMe() {
  return (
    <section>
      <Flex
        direction="column" // Set flex direction to column
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        h="100vh" // Set height to full viewport height
      >
        <Avatar size='2xl' name='Gloria Lim' src='public/images/profile-pic-1.PNG' />
        <Box pt="60px">
          <Text bg="white" bgClip="text" fontSize="6xl" fontWeight="extrabold">
            About Me
          </Text>
        </Box>

      </Flex>
    </section>
  );
}

export default AboutMe;
