import React from 'react';
import { CartWidget } from '../../common/Cart/CartWidget';
import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <Link to='/'>
                    <img src='https://res.cloudinary.com/dge6pbj4l/image/upload/v1710793697/miliEcomerce/i0qchvea6hjseqrfrj4u.jpg' alt='' />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            <button>
                                Shop
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/category/comun'>
                            <button>
                                Comun
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/category/semipermanente'>
                            <button>Semipermanente</button>
                        </Link>
                    </li>
                    <Link to='/category/enGel'>
                        <li><button>En gel</button></li>
                    </Link>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </>
    )
}

