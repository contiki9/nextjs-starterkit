import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const colors = {
  primary: {
    main: '#0EA5E9',
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },
  gray: {
    main: '#718096',
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
}

export const theme = extendTheme(
  {
    colors: {
      ...colors,
    },
  }
  //withDefaultColorScheme({ colorScheme: 'primary' })
)
