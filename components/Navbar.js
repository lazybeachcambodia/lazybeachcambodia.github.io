import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="px-10">
        <Link href="/">
          <a className={router.pathname == "/" ? "active-navbar" : ""}>
            Home
          </a>
        </Link>
        <Link href="/menu">
          <a className={router.pathname == "/menu" ? "active-navbar" : ""}>
            Menu
          </a>
        </Link>
    </div>
  )
}

export default Navbar
