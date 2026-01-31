import chrome from '../assets/images/browser_chrome.png'
import wave from '../assets/images/browser_wave.png'
import safari from '../assets/images/browser_safari.png'
import fireFox from '../assets/images/browser_firefox.png'
import operaMini from '../assets/images/browser_operamini.png'
import logoIcon from '../assets/images/Logo-icon.svg'

const Features = () => {
  return ( 
    <div className="features-section">
      <div className="features-container">
        <div className="features-title_wrapper">
          <h2>Create, share, and access your lists in your browser.</h2>
          <p>No complexity, no rigid categories—just a clean space for your thoughts.</p>
        </div>

        <div className="features-cards_wrapper">
          <div className="feature-card card1">
            <div className="feature-card-title_wrapper">
                <h3 className="feature-card-title">
                  Right where you need it
                </h3>
                <p className="feature-card-desc">
                  Open Loop in a new tab or browser sidebar. Your lists are always close by.
                </p>
            </div>

            <div className="browser-icons_wrapper">
              <div className="browser-icon">
                <img src={chrome} alt="chrome icon" />
              </div>

              <div className="browser-icon">
                <img src={fireFox} alt="firefox icon" />
              </div>

              <div className="browser-icon">
                <img src={safari} alt="safari icon" />
              </div>

              <div className="browser-icon">
                <img src={wave} alt="wave icon" />
              </div>

              <div className="browser-icon">
                <img src={operaMini} alt="opera mini icon" />
              </div>

              <div className="browser-icon">
                <img src={chrome} alt="chrome icon" />
              </div>

              <div className="browser-icon">
                <img src={fireFox} alt="firefox icon" />
              </div>

              <div className="browser-icon">
                <img src={safari} alt="safari icon" />
              </div>

              <div className="browser-icon">
                <img src={wave} alt="wave icon" />
              </div>

              <div className="browser-icon">
                <img src={operaMini} alt="opera mini icon" />
              </div>

            </div>

          </div>

          <div className="feature-card card2">
            <div className="card2-img-container">
                <img src={logoIcon} alt="loop logo mark" className='card2_effect' />
            </div>
          </div>

          <div className="feature-card card3">
            <div className="feature-card-title_wrapper">
              <h3 className="feature-card-title">
                Share in one step
              </h3>
              <p className="feature-card-desc">
                Send a link and start working together. No accounts. No setup.
              </p>
            </div>
          </div>

          <div className="feature-card card4">
            <div className="feature-card-title_wrapper">
              <h3 className="feature-card-title">
                Stay in sync
              </h3>
              <p className="feature-card-desc">
                Add items on your laptop. Check them off on your phone. Changes show up instantly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
   );
}
 
export default Features;