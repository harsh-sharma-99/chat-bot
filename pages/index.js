import Head from 'next/head'
import Link from 'next/link';
import { useTheme } from 'react-jss';
import Button from '../src/components/Button'
import Header from '../src/components/Header'
import makeStyles from '../src/styles/home';


export default function Home() {

  const classes = makeStyles();
  
  return (
    <div className={classes.container} >
      <Head>
        <title>Test App</title>
      </Head>
      <Header> Testing Themes </Header>
      <Link href = "/secondContent" passHref>
      <Button  color="yellow" >SecondContent Page</Button>
      </Link>
     
    </div>
  )
}
