import './PageHeader.modules.css'
import { Library } from 'lucide-react';
import { Link } from 'react-router-dom';


const PageHeader = ({ title, count, headerIcon, pageDesc, createButton }) => {
    return ( 
        <div className="header-container">
            <div className="header-content_wrapper">
                <div className="title_pageheader">
                    {headerIcon}
                    <span className='list-title'> {title} </span>
                    <div className='list-counter'>{count}</div>
                </div>
                <div className='desc-pageheader'> {pageDesc} </div>
            </div>
            <div className="button-wrapper_pageheader">
                
                <Link to='/create-loop'>
                    {createButton}
                </Link>
            </div>
            
        </div>
     );
}
 
export default PageHeader;