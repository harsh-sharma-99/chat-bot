import { useState } from "react";
import { ThemeProvider } from "react-jss"
import {themeDark} from "../src/theme/theme.js"
import {themeLight} from "../src/theme/theme.js"

function MyApp({ Component, pageProps }) {
  const [theme , setTheme] = useState(themeLight);

  const handleModes = () => {
    theme === themeLight ? setTheme(themeDark) : setTheme(themeLight);
  }

  return(<ThemeProvider theme={theme}>
   <button onClick = {handleModes}> change mode </button>
    <Component {...pageProps} />
  </ThemeProvider> )
}

export default MyApp
