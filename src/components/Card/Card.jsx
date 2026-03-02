import React, { useState, useEffect, useCallback } from 'react';
import './Card.modules.css';
import ListItemCard from '../List-items/ListItemCard';

const Card = ({cardItem, viewItemBtn, onViewItemClick }) => {
    // Unique key for this list in localStorage
    const listLocalStorageKey = `list_${cardItem.title.replace(/\s+/g, '_')}`;

    // 1. Track Share Clicks (Display Only)
    const localStorageKeyShareCount = `${listLocalStorageKey}_shareCount`;
    const [shareCount, setShareCount] = useState(0);

    useEffect(() => {
        const storedShareCount = localStorage.getItem(localStorageKeyShareCount);
        setShareCount(storedShareCount ? parseInt(storedShareCount, 10) : 0);
    }, [localStorageKeyShareCount]);


    // 2. Track Last Updated Time (Display Only)
    const localStorageKeyLastUpdated = `${listLocalStorageKey}_lastUpdated`;
    const [lastUpdated, setLastUpdated] = useState(Date.now());

    useEffect(() => {
        const storedLastUpdated = localStorage.getItem(localStorageKeyLastUpdated);
        setLastUpdated(storedLastUpdated ? parseInt(storedLastUpdated, 10) : Date.now());
    }, [localStorageKeyLastUpdated]);

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
        cardItem.items.forEach(listItem => {
            const listItemLocalStorageKey = `checkedItem_${listItem.replace(/\s+/g, '_')}`;
            const isChecked = JSON.parse(localStorage.getItem(listItemLocalStorageKey));
            if (isChecked) {
                count++;
            }
        });
        setCheckedItemsCount(count);
    }, [cardItem.items]);

    useEffect(() => {
        calculateCheckedItems();
        // Listen for changes in localStorage from other tabs/windows or local changes
        const handleStorageChange = (event) => {
            // Check if the change is relevant to this list's items
            if (event.key && event.key.startsWith('checkedItem_')) {
                calculateCheckedItems();
            }
            // Also update share and last updated if relevant for this list
            if (event.key === localStorageKeyShareCount) {
                setShareCount(parseInt(event.newValue, 10) || 0);
            }
            if (event.key === localStorageKeyLastUpdated) {
                setLastUpdated(parseInt(event.newValue, 10) || Date.now());
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [calculateCheckedItems, localStorageKeyShareCount, localStorageKeyLastUpdated]);


    return ( 
        <div className='list-card'>

            {/* header list card */}
            <div className="header_list-card">
                <div className="header-text_list-card">
                    <span className='header-title_list-card'>{cardItem.title}</span>

                    <div className="list-stats_list-card">
                        <div className="stats-slider">
                            <span className='share-counter_stats'>Shared {shareCount} times</span>

                            <span className='update-status_stats'>Updated {formatTimeAgo(lastUpdated)}</span>

                            <span className='items-tracker_stats'>{checkedItemsCount} of {cardItem.items.length} items</span>
                            {/* Removed duplicate span for share counter */}
                        </div>
                    </div>
                </div>

                <div className="header-btn_list-card">
                    {React.cloneElement(viewItemBtn, { onClick: onViewItemClick })}
                </div>
            </div>

            {/* list items */}
            <div className="list-items_list-card">
                <div className="list-counter_list-items">
                    <span className='list-label_list-items'>Items</span>
                    <span className='counter_list-items'>{cardItem.items.length}</span>
                </div>

                <div className="list-items_wrapper">
                    {cardItem && cardItem.items && cardItem.items.map((item, index) => (
                        <ListItemCard key={index} item={item} />
                    ))}
                </div>

            </div>

        </div>
     );
}
 
export default Card;