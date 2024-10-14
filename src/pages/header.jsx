import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const commonClasses = 'text-primary font-medium';
const Header = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="flex px-8 lg:px-4 py-4 justify-between items-center">
            <img className="w-auto antialiased h-8 md:h-5 ml-4 lg:m-0" src="./logo.png" alt="" />

            {/* <span className="text-2xl font-bold mr-4">HAIVA</span> */}
            <nav className="flex gap-6 items-center md:hidden">
                <ul className="flex gap-4">
                    <li><a className={`${location.pathname === '/about' ? commonClasses : ''}`} href="about">About</a></li>
                    <li><a className={`${location.pathname === '/plugins' ? commonClasses : ''}`} href="#">Plugins</a></li>
                    <li><a className={`${location.pathname === '/workflow' ? commonClasses : ''}`} href="#">Workflow</a></li>
                    <li><a className={`${location.pathname === '/' ? commonClasses : ''}`} href="/">Dashboard</a></li>
                    <li><a className={`${location.pathname === '/session' ? commonClasses : ''}`} href="#">Session</a></li>
                </ul>
                <button className="py-1 px-9 lg:!px-4 border rounded-md bg-white hover:bg-gray-50 border-gray-800 hover:border-gray-950 transition duration-300 hover:shadow-md">Account</button>
            </nav>

            {/* Botón de menú para dispositivos móviles */}

            {/* Navegación visible en pantallas md o mayores, o si el menú está abierto en mobile */}
            <div className="h-fit hidden md:flex">
                <button
                    className={`focus:outline-none ml-auto ${isMenuOpen ? 'hidden' : ''}`}
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <nav className={`flex-col gap-6 items-center flex transition-all duration-500 overflow-hidden ${isMenuOpen ? 'h-auto w-auto' : 'h-0 w-0'} md:visible`}>
                    <ul className="flex flex-col gap-4">
                        <li><a className={`${location.pathname === '/about' ? commonClasses : ''}`} href="about">About</a></li>
                        <li><a className={`${location.pathname === '/plugins' ? commonClasses : ''}`} href="#">Plugins</a></li>
                        <li><a className={`${location.pathname === '/workflow' ? commonClasses : ''}`} href="#">Workflow</a></li>
                        <li><a className={`${location.pathname === '/' ? commonClasses : ''}`} href="/">Dashboard</a></li>
                        <li><a className={`${location.pathname === '/session' ? commonClasses : ''}`} href="#">Session</a></li>
                    </ul>
                    <button className="py-1 px-9 border rounded-md bg-white hover:bg-gray-50 border-gray-800 hover:border-gray-950 transition duration-300 hover:shadow-md">
                        Account
                    </button>
                </nav>
                <button
                    className={`focus:outline-none h-fit ${isMenuOpen ? '' : 'hidden'}`}
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;