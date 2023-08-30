import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/* Aqui deberan agregar los Links */}
            <ul>
                <li><Link to='/home'>Inicio</Link></li>
                <li><Link to='/contact'>Contacto</Link></li>
                <li><Link to={'/beer/' + 1}>Beer</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar