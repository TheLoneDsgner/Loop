import './Header.modules.css'
import { Link } from 'react-router-dom';


const PageHeader = ({ title, count, headerIcon, pageDesc, createButton, createIcon }) => {
    return ( 
        <div className="header-container">
            <div className="header-content_wrapper">
                <div className="title_pageheader">
                    {headerIcon}
                    <span className='heade-title_dashboard'> {title} </span>
                    <div className='list-counter_dashboard'>{count}</div>
                </div>
                <div className='desc-pageheader'> {pageDesc} </div>
            </div>

            <div className="button-wrapper_pageheader">
                
                <Link className='create-button-desk' to='/create-loop'>
                    {createButton}
                </Link>

                <Link className='create-button-mobile' to='/create-loop'>
                    {createIcon}
                </Link>
            </div>
            
        </div>
     );
}
 
export default PageHeader;