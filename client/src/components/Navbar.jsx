import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const logoutHandler = event => {
        event.preventDefault()

        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <NavLink to='/' className="brand-logo">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/crate'>Создать</NavLink></li>
                    <li><NavLink to='/links'>Ссылки</NavLink></li>
                    <li><a href='/' onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
