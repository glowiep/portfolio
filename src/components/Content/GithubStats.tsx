import { useState, useEffect } from "react";

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
  return <div>hi {githubStats.currentStreak.days}</div>;
};

export default GithubStats;
