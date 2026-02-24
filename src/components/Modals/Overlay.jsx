import { createPortal } from 'react-dom'
import classes from './Overlay.module.css'

const Overlay = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <>
            <div className={classes['overlay-modal-sheet']} onClick={onClose}>
            
            <div className={classes['modal-content']}>
                {children}
            </div>
            </div>
        </>,
        document.getElementById('modal-root')
    );
}
 
export default Overlay;