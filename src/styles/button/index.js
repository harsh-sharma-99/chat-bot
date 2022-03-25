import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    button: {
        backgroundColor: theme.button,
        padding: 10,
        color: props => props.color,
        border: "none",
        cursor: "pointer"
      }
}))

export default useStyles;