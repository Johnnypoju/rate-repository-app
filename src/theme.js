import { Platform } from "react-native"

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      appBar: '#FFFFFF',
      main: '#e1e4e8',
      white: 'white',
      error: '#d73a4a',
      blue: '#24292e'
    },
    fontSizes: {
      body: 16,
      subheading: 16,
    },
    fonts: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    backgroundColor: {
      backgroundAppBar: '#24292e'
    },
    backgroundOpacity: {
        backgroundAppBar: 500
    },
    backgroundRadius: {
        backgroundAppBar: 10
    },
    padding: {
        backgroundTop: 40,
        backgroundBottom: 20,
        padding: 20,
        languageBar: 3,
        signIn: 10,
        redButton: 15,
        blueButton: 15
    },
    paddingLeft: {
        error: 10
    },
    borderRadius: {
        languageBar: 7
    }
}
  
  export default theme;