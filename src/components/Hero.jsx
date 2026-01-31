import Button from './Button/Button';
import { ArrowRight } from 'lucide-react';
import heroMockup from '../assets/images/Loop-mockup_home1.png'
import blurEffect from '../assets/images/blur-effect_loop.svg'
import logoMarkHalf from '../assets/images/Logo-mark-half_loop.svg'

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
                    <Button
                        variant='primary'
                        size='lg'>
                            Create a list
                    </Button>

                    <Button
                        variant='secondary'
                        size='lg'>
                        View recent lists
                        {<ArrowRight size={24}/>}
                    </Button>
                </div>

            </div>


            <div className="hero-image-container">  
                
                {/* <img src="#" alt="loop mockup" className="hero-mockup-img" /> */}

                <img src={heroMockup} alt="loop mockup" className="hero-mockup-img" />
                <img src={logoMarkHalf} alt="loop logo mark" className="loop-logo-mark-half-svg" />
            </div>
        </div>
     );
}
 
export default Hero;