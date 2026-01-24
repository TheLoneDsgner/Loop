import myLogo from '../assets/images/Logo-loop.png'

import { ArrowRight } from 'lucide-react';

const NavBar = ({backButton, viewDashboard}) => {
    return ( 
        <nav className='navbar'>
            <div className="navbar-wrapper">
                <div className="loop-logo">
                    {backButton}
                    <img src={myLogo} alt="loop logo" />
                </div>

                <div className="nav-links">                
                    <a href="#" className="nav-link_item">Features</a>
                    <a href="#" className="nav-link_item">How It Works</ a>                
                </div>

                {viewDashboard}

                <div className="nav-btn-wrapper">
                    {/* <Button text={'View recent lists'} iconRight={<ArrowRight   size=   {24} color='#4DB6AC'/>}/> */}
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;


// import logo from '../assets/cowrywise-logo.png'
// import search from '../assets/icons/search_line.svg'
// import menu from '../assets/icons/menu_fill.svg'
// import BtnPrimary from './BtnPrimary';
// import { Link } from 'react-router-dom';
// import BtnSecondary from './BtnSecondary';