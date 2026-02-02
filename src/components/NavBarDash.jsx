import myLogo from '../assets/images/Logo-loop.png'
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';


const NavBarDash = ({backButton, }) => {
    return ( 
        <nav className='navbar_dashboard'>
            <div className="navbar-wrapper_dashboard">

                {/* logo */}
                <div className="loop-logo-wrapper">
                    <Link to="/">
                        {backButton}
                    </Link>

                    <Link to="/" className='lp-logo'>
                        <img src={myLogo} alt="loop logo"/>
                    </Link>
                </div>

                <div className="nav-left-items">
                    <div className="button-and-menu-container">
                        <div className="user-profile">
                            { <CircleUserRound size={28}/> }
                        </div>
                    </div>
                    


                </div>                               
                
            </div>
        </nav>
     );
}
 
export default NavBarDash;
