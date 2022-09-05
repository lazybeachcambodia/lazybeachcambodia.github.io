import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaPhoneAlt, FaAt, FaTripadvisor } from 'react-icons/Fa'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="px-10 w-full h-auto flex flex-row justify-between border-b border-primary">
      <div className="w-1/2">
        <a href="/" alt="Home page">
          <img className="h-20" src="/lazybeach-logo.png" />
        </a>
      </div>
      <div className="flex flex-row justify-between w-1/2 uppercase">
          <div className="flex flex-row">
            <Link href="/">
              <a className={router.pathname == "/" ? "active-navbar" : "navbar"}>
                <span>Home</span>
              </a>
          </Link>
          <Link href="/restuarant">
            <a className={router.pathname == "/restuarant" ? "active-navbar" : "navbar"}>
              <span>restuarant</span>
              </a>
          </Link>
          <Link href="/room">
            <a className={router.pathname == "/room" ? "active-navbar" : "navbar"}>
              <span>Room</span>
            </a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname == "/gallery" ? "active-navbar" : "navbar"}>
              <span>Gallery</span>
            </a>
          </Link>
          </div>
          <div className="pt-4 flex flex-row gap-2">
            <a alter="+85516214211" target="_blank" href="https://wa.me/+85516214211">
              <FaPhoneAlt className="contact-icons"/>
            </a>
            <a target="_blank" href="mailto:lazybeachcambodia@gmail.com">
              <FaAt className="contact-icons"/>
            </a>
          <a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g2054864-d1379759-Reviews-Lazy_Beach-Koh_Rong_Sanloem_Sihanoukville_Sihanoukville_Province.html">
            <FaTripadvisor className="contact-icons" />
          </a>
          </div>
        </div>
    </div>
  )
}

export default Navbar
