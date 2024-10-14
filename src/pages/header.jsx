import { useLocation } from 'react-router-dom';

const commonClasses = 'text-primary font-medium';
const Header = () => {
    const location = useLocation();
    return (
        <header className="flex px-8 sm:px-4 py-4 justify-between items-center">
            <img className="w-auto antialiased h-8 md:h-5 ml-4" src="./logo.png" alt="" />

            {/* <span className="text-2xl font-bold mr-4">HAIVA</span> */}
            <nav className="flex gap-6 items-center md:hidden">
                <ul className="flex gap-4">
                    <li><a className={`${location.pathname === '/about' ? commonClasses : ''}`} href="about">About</a></li>
                    <li><a className={`${location.pathname === '/plugins' ? commonClasses : ''}`} href="#">Plugins</a></li>
                    <li><a className={`${location.pathname === '/workflow' ? commonClasses : ''}`} href="#">Workflow</a></li>
                    <li><a className={`${location.pathname === '/' ? commonClasses : ''}`} href="/">Dashboard</a></li>
                    <li><a className={`${location.pathname === '/session' ? commonClasses : ''}`} href="#">Session</a></li>
                </ul>
                <button className="py-1 px-9 border rounded-md bg-white hover:bg-gray-50 border-gray-800 hover:border-gray-950 transition duration-300 hover:shadow-md">Account</button>
            </nav>
        </header>
    );
}

export default Header;