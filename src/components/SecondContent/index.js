import Link from 'next/link'
import React from 'react'

const SecondContent = () => {
  return (
    <div>
        <input />
        <button>Enter</button> 
        <Link href = "/" passHref>
            <button>Home</button>
        </Link>
    </div>
  )
}

export default SecondContent