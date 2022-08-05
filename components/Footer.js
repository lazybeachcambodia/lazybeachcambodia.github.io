import React from 'react'
import { FaInstagram, FaEnvelope, FaWhatsapp, FaPhoneAlt, FaFacebookF, FaTelegramPlane, FaAt, FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-6">
      <div className="self-center flex flex-col">
        <img src="/lazybeach-logo.png" className="object-contain h-24 w-auto self-center" />
        <span className="text-center text-sm">KOH RONG SANLOEM, CAMBODIA</span>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl uppercase">Get In Touch</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <a alter="Email us at" target="_blank" href="mailto:lazybeachcambodia@gmail.com" className="text-lg flex flex-row gap-2 items-center text-primary">
                  <span>lazybeachcambodia@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center self-start">
              <a href="tel:+85516214211" className="text-lg text-primary">+85516214211</a>
              <div className="flex flex-row gap-4">
                <a alter="+85516214211" target="_blank" href="tel:+85516214211">
                  <FaPhoneAlt className="btn-icons-connect" />
                </a>
                <a alter="+85516214211" target="_blank" href="https://wa.me/+85516214211">
                  <FaWhatsapp className="btn-icons-connect" />
                </a>
                <a href="https://t.me/+85516214211">
                  <FaTelegramPlane className="btn-icons-connect" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl uppercase">Contents</h4>
          <div className="flex flex-col text-gray-600 gap-2 uppercase">
            <a href="">Home</a>
            <a href="">Rooms</a>
            <a href="">Getting here</a>
            <a href="">Gallery</a>
            <a href="">Activities</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h4 className="uppercase">Connect with us</h4>
            <h5 className="text-xs text-gray-600">SOCIAL MEDIA CHANNELS</h5>
          </div>
          <div className="pt-4 flex flex-row gap-2">
            <a target="_blank" href="https://fb.com/lazybeachkohrongsanloem">
              <FaFacebookF className="btn-icons-connect"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/lazybeachkohrongsanloem/">
              <FaInstagram className="btn-icons-connect"/>
            </a>
            <a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g2054864-d1379759-Reviews-Lazy_Beach-Koh_Rong_Sanloem_Sihanoukville_Sihanoukville_Province.html">
              <FaTripadvisor className="btn-icons-connect"/>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-primary text-white">
        <span>&copy; Lazybeach, Koh Rong Sanloem {new Date().getFullYear()}. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer