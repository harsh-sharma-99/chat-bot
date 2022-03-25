import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  "@global": {
    body: {
      height: "100vh"
    }
  }
}));

export default useStyles;