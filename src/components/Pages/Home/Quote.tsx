import { Center, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Quote() {
  const headingFontSize = useBreakpointValue({ base: "0.5em", md: "1.1em" });
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Percentage of the element in view to trigger animation
  });
  
  return (
    <Center
      ref={ref}      
      padding="10%"
      marginTop="3em"
      // marginBottom="3em"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        // 'linear(to-t, blue.300, purple.600)',
        // 'linear(to-b, orange.100, purple.600)',
      ]}
      width="full"
      textAlign="center"
      fontSize={headingFontSize}
      textShadow= '2px 2px 4px rgba(0, 0, 0, 0.5)'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
        transition={{ duration: 0.75 }}
      >
        <h1 style={{ fontWeight: "bold" }}>The art of programming is the art of organizing complexity.</h1>
        <h2 style={{ fontWeight: "regular", marginTop: "2em", fontSize: "1.8em"}}>
          -Edsger W. Dijkstra, "Notes On Structured Programming"
        </h2>
      </motion.div>
    </Center>
  );
}

export default Quote;