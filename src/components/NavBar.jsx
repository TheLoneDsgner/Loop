import myLogo from '../assets/images/Logo-loop.png'
import { Link } from 'react-router-dom';


const NavBar = ({menuIcon, navButton, navMenu}) => {
    return ( 
        <nav className='navbar'>
            <div className="navbar-wrapper">

                {/* logo */}
                <Link to="/" className='lp-logo'>
                    <img src={myLogo} alt="loop logo"/>
                </Link>                

                <div className="nav-links">                
                    <a href="#" className="nav-link_item">Features</a>
                    <a href="#" className="nav-link_item">How It Works</ a>                
                </div>

                <div className="nav-left-items">
                    <div className="button-and-menu-container">

                        <Link to="/dashboard" className='nav-button'>
                            {navButton}
                        </Link>


                        <div className="nav-menu">
                            {navMenu}
                        </div>

                    </div>
                    



                    <div className="nav-menu_mobile">
                        <div className="nav-menu-icon">
                            {menuIcon}
                        </div>
                    </div>
                </div>                               
                
            </div>
        </nav>
     );
}
 
export default NavBar;
