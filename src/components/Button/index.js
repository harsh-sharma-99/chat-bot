import React from 'react'
import { useTheme } from 'react-jss';
import makeStyles from '../../styles/button'

const Button = props => {

    const theme = useTheme();
    const classes = makeStyles({theme}); 
    
        return (
            <button className={classes.button} onClick={props.onClick}>{props.children}</button>
        )
}

export default Button