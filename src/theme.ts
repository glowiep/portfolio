import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// //  color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// };

// // 3. extend the theme
// const theme = extendTheme({ config })

// export default theme;

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#0a1421',
        color: 'white', // Set the text color to white for better contrast
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'white', // default is gray
      },
    },
  },
})

export default theme