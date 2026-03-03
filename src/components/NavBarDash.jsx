import './NavBar.modules.css'
import myLogo from '../assets/images/Logo-loop.png'
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Avatar images
import avatar1 from '../assets/images/Avatar-1.png'
import avatar2 from '../assets/images/Avatar-2.png'
import avatar3 from '../assets/images/Avatar-3.png'
import avatar4 from '../assets/images/Avatar-4.png'
import avatar5 from '../assets/images/Avatar-5.png'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

const NavBarDash = ({backButton, }) => {
    const navigate = useNavigate();
    const [currentAvatar, setCurrentAvatar] = useState(null)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * avatars.length)
        setCurrentAvatar(avatars[randomIndex])
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                            { currentAvatar && <img src={currentAvatar} alt="User Avatar" className="avatar-img" /> }
                        </div>
                    </div>

                </div>                               
                
            </div>
        </nav>
     );
}
 
export default NavBarDash;
