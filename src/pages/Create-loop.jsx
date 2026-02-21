import './CreateLoop.modules.css'

import React, { useState } from 'react'
import NavBarDash from "../components/NavBarDash";
import Button from "../components/Button/Button";
import { ChevronLeft, Check, Share, Plus, Info, Loader, } from "lucide-react";
import { Link } from 'react-router';
import HeaderCreate from '../components/HeaderCreate';
import TextField from '../components/TextField';
import ListItem from '../components/List-items/ListItem';
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
    const [listTitle, setListTitle] = useState('')
    const [listDescription, setListDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [isCreateNewListButtonActive, setIsCreateNewListButtonActive] = useState(false)
    const [listId, setListId] = useState(null) // New state to hold the ID of the current list

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
        if (!listTitle.trim()) {
            setTitleError(true)
            return
        }

        setIsSaving(true)
        // Simulate API call or data saving
        setTimeout(() => {
            setIsSaving(false)
            setIsDirty(false) // List is no longer dirty after saving
            setShowSuccessToast(true) // Show success toast
            setTitleError(false) // Clear any title error on successful save

                        let currentListId = listId
                        const listData = {
                            title: listTitle.trim(),
                            description: listDescription.trim(),
                            items: listItems,
                            category: 'Your List', // Assuming this is for user-created lists
                        }
            
                        // Retrieve existing lists from local storage
                        const existingListsJSON = localStorage.getItem('user_loops') // Changed key to user_loops
                        let existingLists = existingListsJSON ? JSON.parse(existingListsJSON) : []
            
                        if (currentListId === null) {
                            // This is a new list, generate a new ID
                            const newId = existingLists.length > 0
                                ? Math.max(...existingLists.map(list => list.id)) + 1
                                : 1
            
                            listData.id = newId
                            existingLists.push(listData)
                            setListId(newId) // Set the new ID for the current list
                            console.log('New loop saved to local storage:', listData)
                        } else {
                            // This is an existing list, find and update it
                            const listIndex = existingLists.findIndex(list => list.id === currentListId)
                            if (listIndex > -1) {
                                existingLists[listIndex] = { ...existingLists[listIndex], ...listData }
                                console.log('Existing loop updated in local storage:', existingLists[listIndex])
                            } else {
                                // Fallback: if somehow listId exists but list not found, treat as new
                                const newId = existingLists.length > 0
                                    ? Math.max(...existingLists.map(list => list.id)) + 1
                                    : 1
                                listData.id = newId
                                existingLists.push(listData)
                                setListId(newId)
                                console.log('Loop not found, saved as new to local storage:', listData)
                            }
                        }
            
                        // Save the updated array back to local storage
                        localStorage.setItem('user_loops', JSON.stringify(existingLists))
            // Hide success toast after 3 seconds
            setTimeout(() => {
                setShowSuccessToast(false)
            }, 3000)
            setIsCreateNewListButtonActive(true) // Activate "Create New List" button on successful save
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

    const handleClearForm = () => {
        setListTitle('')
        setListDescription('')
        setListItems([])
        setIsDirty(false)
        setShowSuccessToast(false)
        setTitleError(false)
        setNewItemText('') // Clear new item text field as well
        setIsCreateNewListButtonActive(false) // Deactivate "Create New List" button after clearing form
        setListId(null) // Reset listId when creating a new list
    }

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
                                    <Button disabled={!isCreateNewListButtonActive} size='md' variant='primary' onClick={handleClearForm}> Create New List </Button>
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
                                        <TextField 
                                            placeholder={"List title"} 
                                            value={listTitle} 
                                            onChange={(e) => {
                                                setListTitle(e.target.value)
                                                setTitleError(false) // Clear error when user starts typing
                                            }}
                                            isError={titleError}
                                            errorMessage="Give your list a title"
                                        />
                                        
                                        <TextField 
                                            placeholder={"List description (optional)"} 
                                            value={listDescription}
                                            onChange={(e) => setListDescription(e.target.value)}
                                        />
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