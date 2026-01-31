import Button from "./Button/Button";
import Logo from "../assets/images/Logo-loop.png";

const FooterAndCta = () => {
    return ( 
        <div className="footer-and-cta-section">
            <div className="container-footer">
                <div className="cta_wrapper">
                    <div className="cta-text-content">
                        <h4>Start planning together</h4>
                        <p>Make a list, share it with a link, and stay in sync—without creating an account.</p>
                    </div>

                    <Button variant="primary" size="lg">
                        Create a list
                    </Button>
                </div>

                <div className="footer_wrapper">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={Logo} alt="Loop logo" className="footer-logo-img"/>
                        </div>
                        <p className="brand-desc">
                            Loop is built on the belief that planning works better when it’s shared.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-wrapper">
                            <a href="#" className="link-footer">Features</a>
                        </div>
                        <div className="link-wrapper">
                            <a href="#" className="link-footer">How it works</a>
                        </div>
                        <div className="link-wrapper">
                            <a href="#" className="link-footer">About</a>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>© 2026 Loop. All right reserved</p>
                </div>
            </div>
        </div>
     );
}
 
export default FooterAndCta;