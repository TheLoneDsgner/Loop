import { useState, useEffect } from 'react'
import CheckIconDefault from '../../assets/icons/Check-icon-default.svg'
import CheckIconChecked from '../../assets/icons/Check-icon-checkedd.svg'
import '../List-items/ListItem.modules.css'

const ListItemCard = ({ item }) => {
    // Generate a unique key for localStorage based on the item content
    const localStorageKey = `checkedItem_${item.replace(/\s+/g, '_')}`;

    // Initialize state from localStorage or default to false
    const [isChecked, setIsChecked] = useState(() => {
        const storedValue = localStorage.getItem(localStorageKey);
        return storedValue ? JSON.parse(storedValue) : false;
    });

    // Update localStorage whenever isChecked changes
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(isChecked));
    }, [isChecked, localStorageKey]);

    const handleCardClick = () => {
        setIsChecked(!isChecked)
    }

    const itemIcon = isChecked ? CheckIconChecked : CheckIconDefault
    const itemStroke = isChecked ? 'stroke-checked' : 'stroke-none'
    const itemTextClass = isChecked ? 'text-checked' : ''

    return ( 
        <div className="list-item_card" onClick={handleCardClick}>
            <div className={itemStroke}></div>

            <div className="icon_list-item-card">
                <img src={itemIcon} alt="item icon" />
            </div>
            
            <p className={itemTextClass}>{item}</p>
        </div>
     );
}
 
export default ListItemCard;