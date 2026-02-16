import './CreateLoop.modules.css'
import React, { useState } from 'react'
import NavBarDash from "../components/NavBarDash";
import Button from "../components/Button/Button";
import { ChevronLeft, Check, Share, ExternalLink, Plus, Info, Loader, Link } from "lucide-react"; // Added Link
import HeaderCreate from '../components/HeaderCreate';
import TextField from '../components/TextField';
import ListItem from '../components/ListItem';
import Modal from '../components/Modals/Modal';

const CreateList = ( ) => {
    const [newItemText, setNewItemText] = useState('')
    const [listItems, setListItems] = useState([])
    const [editingItemIndex, setEditingItemIndex] = useState(null)
    const [isSaving, setIsSaving] = useState(false)
    const [isDirty, setIsDirty] = useState(false) // New state for dirty tracking
    const [showSuccessToast, setShowSuccessToast] = useState(false) // New state for success toast
    const [showShareModal, setShowShareModal] = useState(false) // State to control modal visibility
    const [showCopiedMessage, setShowCopiedMessage] = useState(false) // New state for copied message

    const handleSaveItem = () => {
        if (newItemText.trim()) {
            if (editingItemIndex !== null) {
                const updatedListItems = [...listItems]
                updatedListItems[editingItemIndex] = newItemText.trim()
                setListItems(updatedListItems)
                setEditingItemIndex(null)
            } else {
                // Handle multiple items separated by commas
                const itemsToAdd = newItemText.split(',').map(item => item.trim()).filter(item => item !== '')
                setListItems([...listItems, ...itemsToAdd])
            }
            setNewItemText('')
            setIsDirty(true) // List is now dirty
        }
    }

    const handleRemoveItem = (indexToRemove) => {
        setListItems(listItems.filter((_, index) => index !== indexToRemove))
        setIsDirty(true) // List is now dirty
    }

    const handleEditItem = (itemContent, index) => {
        setNewItemText(itemContent)
        setEditingItemIndex(index)
        document.querySelector('.add-items-form input').focus()
    }

    const handleSaveList = () => {
        setIsSaving(true)
        setTimeout(() => {
            setIsSaving(false)
            setIsDirty(false) // List is no longer dirty after saving
            setShowSuccessToast(true) // Show success toast

            // Hide success toast after 3 seconds
            setTimeout(() => {
                setShowSuccessToast(false)
            }, 3000)
        }, 1500)
    }

    const handleCopyLink = () => {
        // In a real application, you would copy the actual link to the clipboard here.
        // For demonstration, we'll just use a placeholder link.
        const linkToCopy = "https://example.com/share/your-list-id"; // Placeholder
        navigator.clipboard.writeText(linkToCopy).then(() => {
            console.log('Link copied to clipboard!');
            setShowCopiedMessage(true);
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 2000); // Message disappears after 2 seconds
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

        return ( 
            <div className="create-list_main">

                <NavBarDash />    

                <div className="create_container">

                    <HeaderCreate
                        createBackButton={<Button variant='systemIcon' size='md' > <ChevronLeft size={24} aria-label='chevron left icon' /> </Button>}   
                        headerText={'Create a list'}                                    

                        shareBtn={
                            <div className="header-buttons">
                                <div>
                                  <Button 
                                    variant='secondary' 
                                    size='md'
                                    onClick={() => setShowShareModal(true)} 
                                    disabled={listItems.length === 0 || isDirty} // Disable when list is empty OR unsaved changes
                                  > 
                                    <Share size={20} /> Share
                                  </Button>
                                </div>
                            </div>
                        }

                        saveBtn={
                            <div className="header-buttons">
                                <div>
                                    <Button 
                                        disabled={listItems.length === 0 || isSaving || !isDirty} 
                                        iconOnly 
                                        size='md'
                                        onClick={handleSaveList}
                                    > 
                                        <Check size={24} />
                                    </Button>
                                </div>
                            </div>
                        }
                    > </HeaderCreate>             
    
                    <div className="list-and-form_container">
                        <div className="list_container">

                            <div className="header_list-container">
                                <div className="left-items_header">
                                    <span className='list-title'>List</span>
                                    <div className='list-counter'>{listItems.length}</div>
                                </div>

                                <div className="right-items_header">
                                    <Button size='md' variant='secondary'>Preview <ExternalLink size={20} /> </Button>
                                </div>
                            </div>
    

                            <div className="list-items-wrapper">
                                {listItems.length === 0 ? (
                                    <div className="empty-state_create-list">
                                        <div className="empty-list-text_wrapper">
                                            <span>Start with an item</span>
                                            <p>Type anything. Share it when you’re ready.</p>
                                        </div>

                                        <Button variant='secondary' size='md' onClick={() => document.querySelector('.add-items-form input').focus()}> <Plus size={20} />Add an item</Button>
                                    </div>

                                ) : (

                                    <div className="list-items_create-list">

                                        {listItems.map((item, index) => (
                                            <ListItem 

                                                key={index} 

                                                item={item} 

                                                onRemove={handleRemoveItem} 

                                                index={index} 

                                                onEdit={handleEditItem} // Pass the new handler
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
    

                            <div className="footer_list-container">
                                {isSaving ? (
                                    <div className="saving-loader">
                                        <div className="loader-icon"> <Loader size={20} /> </div>
                                        <span className='loader-text'>Saving list...</span>
                                    </div>
                                ) : showSuccessToast ? (
                                    <div className="save-list-success">
                                        <div className="success-icon"> <Check size={20} /> </div>
                                        <span className='text-success'>List saved.</span>
                                    </div>
                                ) : (
                                    <div className="edit-instruction">
                                        <div className="info-icon"> <Info size={20} /> </div>
                                        <span className='instruction-text'>Tap item to edit</span>
                                    </div>
                                )}
                            </div>
                        </div>
    

                        <div className="form_wrapper">
                            <form className='form-group'>                                
                                <div className="title-form">
                                    <span className='form-header'>Your list title</span>

                                    <div className="text-field-wrapper">
                                        <TextField placeholder={"List title"} />
                                        <TextField placeholder={"List description (optional)"} />
                                    </div>
                                </div>    

                                <div className="add-items-form">
                                    <TextField 
                                        label={"Add item"} 
                                        placeholder={"Add item"} 
                                        value={newItemText} 

                                        onChange={(e) => setNewItemText(e.target.value)}

                                        addItemBtn={ 
                                            <button 
                                                className='add-item-btn' 
                                                onClick={handleSaveItem} // Use handleSaveItem
                                                disabled={!newItemText.trim()}
                                            > 

                                                {editingItemIndex !== null ? <Check /> : <Plus />} {/* Conditional icon */}
                                            </button> 
                                        } 
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <Modal 
                  isOpen={showShareModal} 
                  onClose={() => setShowShareModal(false)} 
                  title="Share this list"
                  description="Anyone with the link can view and check items."
                >
                  <div className="modalActionsContent">
                    <div className="modal-action">
                        <Button
                      onClick={handleCopyLink}
                      variant="primary"
                    >
                        <Link size={20} />
                        Copy link
                    </Button>
                    </div>
                    
                    {showCopiedMessage && (
                      <span className="copiedMessage">Link copied. You’re good to share.</span>
                    )}
                  </div>
                </Modal>

            </div>

         );
}
 
export default CreateList;
