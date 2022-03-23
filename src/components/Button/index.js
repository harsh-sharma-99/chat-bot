import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    button: {
        backgroundColor: "green",
        padding: 10,
        color: props => props.color,
        border: "none",
        cursor: "pointer"
      }
})

const Button = props => {
    const classes = useStyles(props); 
    
        return (
            <button className={classes.button} onClick={props.onClick}>{props.children}</button>
        )
}

export default Button