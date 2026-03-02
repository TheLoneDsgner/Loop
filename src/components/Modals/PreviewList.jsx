import { useState, useEffect, useCallback } from 'react'
import Button from '../Button/Button';
import { Share, X, Info, FilePenLine  } from 'lucide-react'; // Import the close icon
import ListItemCard from '../List-items/ListItemCard';
import './PreviewList.modules.css'

const PreviewItem = ({ onClose, item, onShare, onEdit }) => {
    // Unique key for this list in localStorage
    const listLocalStorageKey = `list_${item.title.replace(/\s+/g, '_')}`;

    // 1. Track Share Clicks
    const localStorageKeyShareCount = `${listLocalStorageKey}_shareCount`;
    const [shareCount, setShareCount] = useState(() => {
        const storedShareCount = localStorage.getItem(localStorageKeyShareCount);
        return storedShareCount ? parseInt(storedShareCount, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKeyShareCount, shareCount.toString());
    }, [shareCount, localStorageKeyShareCount]);

    const handleShareClick = useCallback(() => {
        setShareCount(prevCount => prevCount + 1);
        onShare(); // Call the original onShare prop
    }, [onShare]);


    // 2. Track Last Updated Time
    const localStorageKeyLastUpdated = `${listLocalStorageKey}_lastUpdated`;
    const [lastUpdated, setLastUpdated] = useState(() => {
        const storedLastUpdated = localStorage.getItem(localStorageKeyLastUpdated);
        return storedLastUpdated ? parseInt(storedLastUpdated, 10) : Date.now(); // Default to now if not found
    });

    useEffect(() => {
        localStorage.setItem(localStorageKeyLastUpdated, lastUpdated.toString());
    }, [lastUpdated, localStorageKeyLastUpdated]);

    const handleEditList = useCallback(() => {
        setLastUpdated(Date.now()); // Update to current timestamp
        onEdit(item); // Call the original onEdit prop
    }, [onEdit, item]);

    // Helper to format time ago
    const formatTimeAgo = useCallback((timestamp) => {
        const seconds = Math.floor((new Date() - timestamp) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return Math.floor(seconds) + " seconds ago";
    }, []);


    // 3. Track Checked Items
    const [checkedItemsCount, setCheckedItemsCount] = useState(0);

    const calculateCheckedItems = useCallback(() => {
        let count = 0;
        item.items.forEach(listItem => {
            const listItemLocalStorageKey = `checkedItem_${listItem.replace(/\s+/g, '_')}`;
            const isChecked = JSON.parse(localStorage.getItem(listItemLocalStorageKey));
            if (isChecked) {
                count++;
            }
        });
        setCheckedItemsCount(count);
    }, [item.items]);

    useEffect(() => {
        calculateCheckedItems();
        // Listen for changes in localStorage from other tabs/windows
        const handleStorageChange = (event) => {
            // Check if the change is relevant to this list's items
            if (event.key && event.key.startsWith('checkedItem_')) {
                calculateCheckedItems();
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [calculateCheckedItems]);


    return(
        <div className="preview-item_container">

            {/* modal header */}
            <div className="header-preview_container">
                <div className="close-btn-and-title">
                    <Button variant="systemIcon" size="md" onClick={onClose}>
                        <X size={20} />
                    </Button>
                    <span className='title-preview_container'>Your list</span>
                </div>
                
                <div className="share-item-btn_wrapper">
                    <Button variant='primary' size='md' onClick={handleShareClick}>
                    <Share size={20} /> Share
                </Button>
                </div>
            </div>

            {/* list title and description */}
            <div className='item-title-and-desc'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>

            {/* list items */}
            <div className="list-items-wrapper_preview">
                {/* list caption */}
                <div className="caption-list-items-wrapper">
                    <div className="list-items-counter_preview">
                        <span className='list-label_list-items'>Items</span>
                        <span className='counter_preview'>{item.items.length}</span>
                    </div>

                    <div className="list-stats_list-card">
                        <div className="stats-slider">
                            <span className='share-counter_stats'>Shared {shareCount} times</span>

                            <span className='update-status_stats'>Updated {formatTimeAgo(lastUpdated)}</span>

                            <span className='items-tracker_stats'>{checkedItemsCount} of {item.items.length} items</span>

                            <span className='share-counter_stats'>Shared {shareCount} times</span> {/* Duplicated, keeping for now */}
                        </div>
                    </div>
                </div>
                
                {/* list items - modal */}
                <div className='items-preview'>
                    {item.items.map((listItem, index) => (
                        <ListItemCard key={index} item={listItem} />
                    ))}
                </div>
            </div>
            
            {/* modal footer */}
            <div className="footer-list-preview">
                <div className="edit-instruction_preview">
                    <div className="info-icon"> <Info size={20} /> </div>
                    <span className='instruction-text'>View, share, and edit your list</span>
                </div>

                <Button variant='secondary' size='md' onClick={handleEditList}><FilePenLine size={20}/> Edit list</Button>
            </div>

        </div>
    );
}
 
export default PreviewItem;