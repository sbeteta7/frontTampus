import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useAuth } from './Context';
import profileNOT from '../img/profileNOT.png'

const Header = () => {

    const Auth = useAuth()
    const isLoggedIn = Auth.userIsAuthenticated() 
   

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleLogOut = (e) => {
        e.preventDefault();
         // Prevent the default action of the link
         Auth.userLogout()
         .then(() => {
           console.log('User logged out successfully')
        })
         .catch((error) => console.log(error));


    }
    
    return(
        <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-black shadow-md'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TAMPUS</h1>
            <ul className='hidden md:flex'>
                <Link className={`p-4 hover:text-purple-800 hover:bg-[#e0fff5] transition-colors duration-300 ${
                    location.pathname === '/' ? 'bg-[#e0fff5] text-purple-800' : ''
                    }`}
                    to='/'>Home
                </Link>
                <Link className={`p-4 hover:text-purple-800 hover:bg-[#e0fff5] transition-colors duration-300 ${
                    location.pathname === '/Navegar' ? 'bg-[#e0fff5] text-purple-800' : ''
                    }`}
                    to='/Navegar'>Navegar
                </Link>
                <Link className={`p-4 hover:text-purple-800 hover:bg-[#e0fff5] transition-colors duration-300 ${
                    location.pathname === '/Nosotros' ? 'bg-[#e0fff5] text-purple-800' : ''
                    }`}
                    to='/Nosotros'>Nosotros
                </Link>
                <Link className={`p-4 hover:text-purple-800 hover:bg-[#e0fff5] transition-colors duration-300 ${
                    location.pathname === '/page2' ? 'bg-[#e0fff5] text-purple-800' : ''
                    }`}
                    to='/page2'>page2
                </Link>
                <Link className={`p-4 hover:text-purple-800 hover:bg-[#e0fff5] transition-colors duration-300 ${
                    location.pathname === '/page3' ? 'bg-[#e0fff5] text-purple-800' : ''
                    }`}
                    to='/Publicar'>Publicar
                </Link>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
        
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 z-10 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TAMPUS</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 hover:text-purple-800 border-b border-gray-400'><Link to='/'>Home</Link></li>
                    <li className='p-4 hover:text-purple-800 border-b border-gray-400'><Link to='/Navegar'>Navegar</Link></li>
                    <li className='p-4 hover:text-purple-800 border-b border-gray-400'>Nosotros</li>
                    <li className='p-4 hover:text-purple-800 border-b border-gray-400'>Page3</li>
                    <li className='p-4 hover:text-purple-800'>Page4</li>
                </ul>
            </div>

            <div className='relative inline-block'>

                {!isLoggedIn ? ( 
                    <div>
                        <img
                            src={profileNOT}
                            className='rounded-full cursor-pointer' 
                            style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }}
                            onClick={toggleMenu}
                        />
                    </div> 
                 ) : ( 
                    <div>
                       
                      <img /*  src={user.picture}  */ src={'https://tecdn.b-cdn.net/img/new/avatars/2.jpg'}
                        className="rounded-full cursor-pointer"
                        style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight:'50px'}}
                        alt=""
                        loading="lazy"
                        onClick={toggleMenu}
                      />    
                   
                    </div>
                )}                    

                

                {showMenu && (
                    <div className='absolute bg-white p-4 shadow-md left-[-60px] z-10'>
                        <ul>
                        <li className='p-2 border-b hover:text-purple-800 border-gray-400'><Link to='/Perfil'>Perfil</Link></li>
                        <li className='p-2 border-b hover:text-purple-800 border-gray-400'><Link to=''>Ajustes</Link></li>
                    {isLoggedIn ? 
                        <li className='p-2 border-b hover:text-purple-800 border-gray-400'><Link to='/' onClick={handleLogOut} >Log out</Link></li>
                    :
                        <li className='p-2 border-b hover:text-purple-800 border-gray-400'><Link to='/Login'>Login</Link></li>
                    }   
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;