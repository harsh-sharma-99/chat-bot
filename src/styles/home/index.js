import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
    container: {
      backgroundColor: theme.bg,
      color: theme.text,
      height: "100vh",
      width:"100%"
    }
  }))

  export default useStyles;