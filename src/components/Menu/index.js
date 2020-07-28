import React from 'react'
import Logo from '../../assets/img/cahflix-blue.png'
import './Menu.css'
import Button from '../Button'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="CahFlix" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu