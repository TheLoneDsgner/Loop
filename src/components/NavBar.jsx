import myLogo from '../assets/images/Logo-loop.png'

import { ArrowRight } from 'lucide-react';
import { Camera } from 'lucide-react';
import Button from './Button/Button';

const NavBar = ({backButton, viewDashboard}) => {
    return ( 
        <nav className='navbar'>
            <div className="navbar-wrapper">

                {/* logo */}
                <div className="loop-logo">
                    {backButton}
                                       
                    {/* <div className="back-icon">{backButton}</div>                     */}
                    <img src={myLogo} alt="loop logo" />
                </div>

                

                <div className="nav-links">                
                    <a href="#" className="nav-link_item">Features</a>
                    <a href="#" className="nav-link_item">How It Works</ a>                
                </div>

                <div className="nav-left-items">
                    {viewDashboard}

                    <div className="nav-links_mobile">
                        
                    </div>
                </div>
                               
                
            </div>
        </nav>
     );
}
 
export default NavBar;
