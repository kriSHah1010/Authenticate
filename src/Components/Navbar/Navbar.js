import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = (props) => {
    console.log(props.isLogin)
    return (
        <div className='navbar-maincontainer'>
            <div className='navbar-leftcontainer'>{props.userName == undefined ? "Name" : props.userName}</div>
            <div className='navbar-rightcontainer'>
                {props.isLogin &&
                    <>
                        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
                        <NavLink activeClassName='active' exact to='/contact'>Contact</NavLink>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar