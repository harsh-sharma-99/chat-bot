import Head from 'next/head'
import { createUseStyles, useTheme } from 'react-jss';
import Button from '../src/components/Button'
import Header from '../src/components/Header'

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.bg,
    color: theme.text,
    height: "100%",
    width:"100%"
  }
}))

export default function Home() {

  const handleClick = () => {
    alert("hello");
  }

  const theme = useTheme();
  const classes = useStyles({theme})

  return (
    <div className={classes.container} >
      <Head>
        <title>Test App</title>
      </Head>
      <Header> Testing Themes </Header>
      <Button onClick={handleClick} color="yellow" >toggle</Button>
    </div>
  )
}
