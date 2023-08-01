import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import icon from './img-icon.png'

const Header = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <header>
        <Link className="site-logo" to='/'>#VANLIFE</Link>
        <NavLink to='host' className={({isActive}) => isActive ? activeStyles : null}>Host</NavLink>
        <NavLink to='about' className={({isActive}) => isActive ? activeStyles : null}>About</NavLink>
        <NavLink to='vans' className={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink> 
        <Link to="login" className="login-link"><img src={icon} className="login-icon" alt='icon'/></Link>  
    </header>
  )
}

export default Header