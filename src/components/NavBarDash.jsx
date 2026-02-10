import './NavBar.modules.css'
import myLogo from '../assets/images/Logo-loop.png'
import { Link, useNavigate } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';


const NavBarDash = ({backButton, }) => {
    const navigate = useNavigate();

    return ( 
        <nav className='navbar_dashboard'>
            <div className="navbar-wrapper_dashboard">

                {/* logo */}
                <div className="loop-logo-wrapper_dashboard">
                    <div className='back-btn-dash' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
                        {backButton}
                    </div>

                    <Link to="/" className='lp-logo'>
                        <img src={myLogo} alt="loop logo"/>
                    </Link>
                </div>

                <div className="nav-left-items">
                    <div className="button-and-menu-container">
                        <div className="user-profile">
                            { <CircleUserRound size={24}/> }
                        </div>
                    </div>
                    


                </div>                               
                
            </div>
        </nav>
     );
}
 
export default NavBarDash;
