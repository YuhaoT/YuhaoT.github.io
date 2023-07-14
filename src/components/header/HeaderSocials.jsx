import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/yuhaohe97/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/YuhaoT" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials