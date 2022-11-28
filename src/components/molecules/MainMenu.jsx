import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <div className='px-4 py-2 text-white'>
            <ul className='flex gap-4'>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                

            </ul>

        </div>
    )
}

export default MainMenu