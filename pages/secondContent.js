import React from 'react'
import { useTheme } from 'react-jss'
import SecondContent from '../src/components/SecondContent'
import makeStyles from "../src/styles/secondContent"

const secondContent = () => {

  const theme = useTheme();  
  const classes = makeStyles({theme});
    
  return (
      <div className= {classes.secondaryContainer}>
           <h1>This is second page</h1>
            <SecondContent/>
      </div>
  

  )
}

export default secondContent