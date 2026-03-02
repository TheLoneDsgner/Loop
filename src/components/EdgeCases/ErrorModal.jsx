import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import Button from '../Button/Button'
import classes from './ErrorModal.module.css'

const ErrorModal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  modalImage, // Now expects an image path string
  actionButtonText,
  onActionButtonClick,
  showActionButton = true,
  showCloseButton = true // New prop to control close button visibility
}) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={classes.overlay} onClick={onClose}>

      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>

        <div className={classes.header}>
          <div className={classes.modalImageContainer}>
            {modalImage && <img src={modalImage} alt="Modal Icon" className={classes.modalImage} />}
          </div>

          {showCloseButton && (
            <Button variant='systemIcon' className={classes.closeButton} onClick={onClose}>
              <X size={20} />
            </Button>
          )}
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>

        {showActionButton && ( // Conditionally render the actions div
          <div className={classes.actions}>
            <Button variant='primary' size='lg' onClick={onActionButtonClick}>
              {actionButtonText}
            </Button>
          </div>
        )}
        
      </div>

    </div>,
    document.getElementById('modal-root')
  )
}

export default ErrorModal
