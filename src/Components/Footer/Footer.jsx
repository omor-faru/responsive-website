import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-black text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold ">Footer</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free To Reach Out!</h3>
      </div>



      <ul className="text-sm md:text-lg space-y-4">
  <li className="flex items-center gap-3 hover:text-blue-400 transition-colors">
    <MdOutlineEmail size={24} className="text-red-500" />
    <a
      href="mailto:omorfaruque783@gmail.com"
      className="text-blue-600 hover:underline"
    >
      omorfaruque783@gmail.com
    </a>
  </li>

  <li className="flex items-center gap-3 hover:text-blue-400 transition-colors">
    <CiLinkedin size={24} className="text-blue-400" />
    <a
      href="https://linkedin.com/in/username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      linkedin.com/in/username
    </a>
  </li>

  <li className="flex items-center gap-3 hover:text-gray-800 transition-colors">
    <FaGithub size={24} className="text-white" />
    <a
      href="https://github.com/omor-faru/omor-faru"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      github.com/omor-faru/omor-faru
    </a>
  </li>

  <li className="flex items-center gap-3 hover:text-blue-700 transition-colors">
    <FaFacebook size={24} className="text-blue-600" />
    <a
      href="https://www.facebook.com/omor.faruk.676920"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      facebook.com/omor.faruk.676920
    </a>
  </li>
</ul>




    </div>

  )
}

export default Footer
