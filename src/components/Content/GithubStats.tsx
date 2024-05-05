// @ts-nocheck

import { useState, useEffect } from "react";
import { Container, Text, SimpleGrid, Box, Center, Link } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({ triggerOnce: true });

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
  }, [inView]);

  const totalContributionsCount = useMotionValue(0);
  const currentStreakCount = useMotionValue(0);
  const longestStreakCount = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      animate(totalContributionsCount, githubStats.totalContributions, {
        duration: 2,
      });
      animate(currentStreakCount, githubStats.currentStreak.days, {
        duration: 2,
      });
      animate(longestStreakCount, githubStats.longestStreak.days, {
        duration: 2,
      });
    }
  }, [inView]);

  const roundedTotalContributions = useTransform(
    totalContributionsCount,
    Math.round
  );
  const roundedCurrentStreak = useTransform(currentStreakCount, Math.round);
  const roundedLongestStreak = useTransform(longestStreakCount, Math.round);

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box textAlign="center">
          <Text fontWeight="extrabold" fontSize="5xl" mb={2}>
            <Box as="span" display="inline-block" position="relative">
              <Link href="https://github.com/glowiep/" isExternal target="_blank" _hover={{ textDecoration: 'none' }}>Github Stats</Link>
              <Box
                as="span"
                display="block"
                position="absolute"
                bg={"blue.600"}
                w={"100%"}
                h={"1px"}
              />
            </Box>
          </Text>
          <Text fontSize="3xl" fontStyle="italic">
            Quality is not an act, it is a habit.
          </Text>
        </Box>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 2, sm: 5 }}
        mt={12}
        mb={4}
      >
        <Box p={{ base: 2, sm: 5 }} textAlign="center">
          <motion.div ref={ref}>
            <Text as={motion.div} fontWeight="extrabold" fontSize="xx-large">
              {roundedTotalContributions}
            </Text>
          </motion.div>
          <Text fontSize="sm">Total Contributions</Text>
        </Box>
        <Box p={{ base: 2, sm: 5 }} textAlign="center">
          <motion.div ref={ref}>
            <Text as={motion.div} fontWeight="extrabold" fontSize="xx-large">
              {roundedCurrentStreak}
            </Text>
          </motion.div>
          <Text fontSize="sm">Current Streak</Text>
        </Box>
        <Box p={{ base: 2, sm: 5 }} textAlign="center">
          <motion.div ref={ref}>
            <Text as={motion.div} fontWeight="extrabold" fontSize="xx-large">
              {roundedLongestStreak}
            </Text>
          </motion.div>
          <Text fontSize="sm">Longest Streak</Text>
        </Box>
      </SimpleGrid>
      
      <Box p={{ base: 2, sm: 5 }} textAlign="center" display="flex" justifyContent="center">
        <img src="https://ghchart.rshah.org/glowiep" alt="My Github chart" />
      </Box>        
    </Container>
  );
};

export default GithubStats;