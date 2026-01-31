import Button from "./Button/Button";
import logoIcon from '../assets/images/Logo-icon.svg'


const HighlightSection = () => {
    return ( 
        <div className="highlight-section">
            <div className="highlight-container">
                <div className="highlight-content_wrapper">
                    <div className="highlight-text-content_wrapper">
                        <div className="loop-logo-highlight">
                            <img src={logoIcon} alt="Loop logo icon" className="logo-icon"/>
                        </div>
                    
                        <div className="highlight-text_wrapper">
                            <h4>
                                 Better together, by default
                            </h4>
                            <p>
                                Lists are meant to be shared. With Loop, everyone sees the samething—and changes stay in sync.
                            </p>
                        </div>

                        <Button variant="primary" size="lg">
                            Create a list
                        </Button>
                    </div>

                    <div className="highlight-footer">
                        <span>No follow-ups. No screenshots. No confusion.</span>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default HighlightSection;