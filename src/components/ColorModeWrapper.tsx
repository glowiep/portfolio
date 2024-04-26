import { ChakraProvider, ColorModeScript, extendTheme, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const ColorModeWrapper = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Set initial color mode based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleColorMode();
    }
  }, []);

  // Extend Chakra UI theme to customize color modes
  const theme = extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: true,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default ColorModeWrapper;