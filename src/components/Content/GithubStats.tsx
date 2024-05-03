import { useState, useEffect } from "react";
import { Container, Text, SimpleGrid, Box, Center } from '@chakra-ui/react';

const GithubStats = function () {
  const initialState = {
    totalContributions: 1522,
    firstContribution: "2017-05-20",
    longestStreak: {
      start: "2024-02-07",
      end: "2024-02-25",
      days: 19,
    },
    currentStreak: {
      start: "2024-04-26",
      end: "2024-05-01",
      days: 6,
    },
  };
  const [githubStats, setGithubStats] = useState(initialState);
  console.log(githubStats.currentStreak);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.rigle.co/github-streak/stats/glowiep"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGithubStats(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box textAlign="center">
          <Text fontWeight="extrabold" fontSize="x-large" mb={2}>
            <Box as="span" display="inline-block" position="relative">
              Github Stats
              <Box
                as="span"
                display="block"
                position="absolute"
                bg={'blue.600'}
                w={'100%'}
                h={'1px'}
              />
            </Box>
          </Text>
          <Text>Pushing the limits of my creativity, one line of code at a time.</Text>
        </Box>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, sm: 5 }} mt={12} mb={4}>
          <Box p={{ base: 2, sm: 5 }} textAlign="center">
            <Text fontWeight="extrabold" fontSize="xx-large">
              {githubStats.totalContributions}
            </Text>
            <Text fontSize="sm">Total Contributions</Text>
          </Box>
          <Box p={{ base: 2, sm: 5 }} textAlign="center">
            <Text fontWeight="extrabold" fontSize="xx-large">
              {githubStats.currentStreak.days}
            </Text>
            <Text fontSize="sm">Current Streak</Text>
          </Box>
          <Box p={{ base: 2, sm: 5 }} textAlign="center">
            <Text fontWeight="extrabold" fontSize="xx-large">
              {githubStats.longestStreak.days}
            </Text>
            <Text fontSize="sm">Longest Streak</Text>
          </Box>
      </SimpleGrid>
    </Container>
    // <div>
    //   Total Contributions: {githubStats.totalContributions}
    //   Current Streak: {githubStats.currentStreak.days}
    //   Longest Streak: {githubStats.longestStreak.days}
    // </div>
  );
};

export default GithubStats;
