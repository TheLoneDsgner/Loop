import Button from './Button/Button';
import { ArrowRight } from 'lucide-react';
import heroMockup from '../assets/images/Loop-mockup_home1.png'
import logoMarkHalf from '../assets/images/logo-mark-half_loop.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text-and-caption">
                    <div className="hero-caption">
                        <p>Any list. Any browser. Any time.</p>
                    </div>
                    <div className="hero-text">
                        <h1>
                            <span>Everything you plan,</span>
                            <span className="text-accent"> in one place.</  span>
                       </h1>
                        <p>From quick grocery runs to meaningful gift   lists, Loop adapts to what you’re doing—so you    don’t need another app.</p>
                    </div>
                </div>

                <div className="hero-actions">
                    <Link to="/create-loop">
                        <Button
                            variant='primary'
                            size='lg'>
                                Create a list
                        </Button>
                    </Link>

                    <Link to="/dashboard">
                        <Button
                            variant='secondary'
                            size='lg'>
                            View recent lists
                            {<ArrowRight aria-label='arrow right icon' size={20}/>}
                        </Button>
                    </Link>
                </div>

            </div>


            <div className="hero-image-container">

                <img src={heroMockup} alt="loop mockup" className="hero-mockup-img" />

                <img src={logoMarkHalf} alt="loop logo mark" className="loop-logo-mark-half-svg" />

            </div>
        </div>
     );
}
 
export default Hero;