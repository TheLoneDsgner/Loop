import Button from './Button/Button';
import './Header.modules.css'
import { useNavigate } from 'react-router';

const HeaderCreate = ({createBackButton, headerText, shareBtn, saveBtn}) => {
    const navigate = useNavigate();
    
    return ( 
        <div className="header-create">
            <div className="header-left-items">
                <div className='header-back-btn' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
                        {createBackButton}
                </div>

                <span className='header-text'>{headerText}</span>
            </div>

            <div className='btn-header'>
                {shareBtn}
                {saveBtn}
            </div>         
            
        </div>
     );
}
 
export default HeaderCreate;