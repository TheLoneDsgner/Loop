import myLogo from '../assets/images/Logo-loop.png'
import { ArrowRight } from 'lucide-react';
import { Camera } from 'lucide-react';
import { Menu } from 'lucide-react';
import Button from './Button/Button';


const NavBar = ({backButton, viewDashboard, menuIcon}) => {
    return ( 
        <nav className='navbar'>
            <div className="navbar-wrapper">

                {/* logo */}
                <div className="loop-logo-wrapper">
                    {backButton}

                    <a href="#" className='lp-logo'>
                        <img src={myLogo} alt="loop logo"/>
                    </a>  
                                    

                </div>

                

                <div className="nav-links">                
                    <a href="#" className="nav-link_item">Features</a>
                    <a href="#" className="nav-link_item">How It Works</ a>                
                </div>

                <div className="nav-left-items">
                    <div className="button-and-menu-container">
                        <div className="nav-button">
                            <Button
                                className='view-dashboard-btn'
                                variant="secondary"
                                size='md'>
                                View Recent List
                                {<ArrowRight aria-label="arrowicon" size={20}/>}
                            </Button>
                        </div>

                        <div className="nav-menu">
                            <Menu aria-label="menu icon" size={28} className='nav-menu_icon'/>
                        </div>
                    </div>
                    



                    <div className="nav-links_mobile">
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
