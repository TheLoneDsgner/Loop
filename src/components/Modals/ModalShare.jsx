import { createPortal } from 'react-dom'
import { X, } from 'lucide-react'
import Button from '../Button/Button'
import classes from './Modal.module.css'

const shareImage = "/src/assets/icons/Share-img.svg"; // Image from Figma context

const Modal = ({ isOpen, onClose, title, description, children }) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={classes.overlay}>

      <div className={classes.modal}>

        <div className={classes.header}>
          <div className={classes.modalImageContainer}>
            <img src={shareImage} alt="Modal Icon" className={classes.modalImage} />
          </div>

          <Button variant='systemIcon' className={classes.closeButton} onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>

        <div className={classes.actions}>
          {children}
        </div>
        
      </div>

    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
