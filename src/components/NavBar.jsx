import './NavBar.modules.css'
import { useState } from 'react' 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';
import Button from './Button/Button';
import myLogo from '../assets/images/Logo-loop.png'
import loopLogoBg from '../assets/images/Logo-bg-img.png'


const NavBar = ({navButton, navMenu}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleFeaturesClick = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            const element = document.getElementById('features')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                setIsMenuOpen(false)
            }
        } else {
            navigate('/', { state: { scrollTo: 'features' } })
        }
    }
    
    return (
        <div className='nav-main'>
        
            <nav className='navbar'>

                <div className="navbar-wrapper">

                    {/* logo */}
                    <Link to="/" className='lp-logo'>
                        <img src={myLogo} alt="loop logo"/>
                    </Link>                

                    <div className="nav-links">                
                        <a href="#features" onClick={handleFeaturesClick} className="nav-link_item">Features</a>
                        
                        <div className="nav-link_item_wrapper">
                            <a href="#" className="nav-link_item">How It Works</a>
                            
                            <div className="desktop-popover">
                                <div className="popover-content">
                                    <div className="nav-drop-down_desktop">
                                        <div className="large-section">
                                            <span>Better together, by default.</span>
                                            <img src={loopLogoBg} alt="loop logo as background" />
                                        </div>

                                        <div className="features-nav-drop-down">
                                            <div className="feature-card_mobile">
                                                <span>Browser-native lists</span>
                                                <p>Create a list right in your browser. It opens in a new tab or sidebar and is ready to type.</p>
                                            </div>
                                            
                                            <div className="feature-card_mobile">
                                                <span>Share with a link</span>
                                                <p>Copy a link and send it to anyone. They can open the list and start checking items right away.</p>
                                            </div>

                                            <div className="feature-card_mobile">
                                                <span>Always in sync</span>
                                                <p>Changes update instantly across devices, so everyone sees the same list at the same time.</p>
                                            </div>

                                            <div className="feature-card_mobile">
                                                <span>Private by default</span>
                                                <p>Your lists stay local to your browser until you choose to share them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-left-items">
                        <div className="button-and-menu-container">

                            <Link to="/dashboard" className='nav-button'>
                                {navButton}
                            </Link>

                            {/* Menu open trigger */}
                            <div onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer' }} className='nav-menu_icon'>
                                    {navMenu}
                            </div>
                        </div>
                    </div>                               
                
                </div>
            
            </nav>

            <div className="nav-menu_mobile-container">
                    {/* Nav menu mobile */}
                    {/* Conditionally display the overlay based on isMenuOpen state */}
                <div className={`nav-menu_overlay ${isMenuOpen ? 'nav-menu_overlay--open' : ''}`} style={{ display: isMenuOpen ? 'flex' : 'none' }}>

                    <div className="nav-menu-container">
                        <div className="header-menu_mobile">
                            {/* logo */}
                            <Link to="/" className='lp-logo'>
                                <img src={myLogo} alt="loop logo"/>
                            </Link>

                            {/* Menu close trigger */}
                            <div className="nav-menu_icon" onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer' }}>
                                <X aria-label="close icon" size={28} />
                            </div>
                        </div>

                        <div className="mobile-nav-content">
                            <div className="mobile-nav-links">
                                <a href="#features" onClick={handleFeaturesClick} className="nav-link_item_mobile">Features</a>
                                <a href="#" className="nav-link_item_mobile">How It Works</a>
                            </div>

                            <div className="nav-button_mobile">
                                <Link to="/dashboard" className='nav-button_mobile'>
                                    <Button variant='secondary' size='lg'> View recent lists    <ChevronRight size={20} />
                                    </Button>
                                </Link>
                            </div>

                            <div className="nav-drop-down_mobile">
                                <div className="large-section_mobile">
                                    <span>Better together, by default.</span>

                                    <img src={loopLogoBg} alt="loop logo as background" />
                                </div>

                                <div className="features-nav-drop-down_mobile">
                                    <div className="feature-card_mobile">
                                        <span>Browser-native lists</span>
                                        <p>Create a list right in your browser. It opens in a new tab or sidebar and is ready to type.</p>
                                    </div>

                                    <div className="feature-card_mobile">
                                        <span>Share with a link</span>
                                        <p>Copy a link and send it to anyone. They can open the list and start checking items right away.</p>
                                    </div>

                                    <div className="feature-card_mobile">
                                        <span>Always in sync</span>
                                        <p>Changes update instantly across devices, so everyone sees the same list at the same time.</p>
                                    </div>

                                    <div className="feature-card_mobile">
                                        <span>Private by default</span>
                                        <p>Your lists stay local to your browser until you choose to share them.</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>  
            </div>

        </div> 
     );
}
 
export default NavBar;
