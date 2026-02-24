import React from 'react'; // Import React for React.cloneElement
import './Card.modules.css'
import ListItemCard from '../List-items/ListItemCard';

const Card = ({cardItem, viewItemBtn, onViewItemClick }) => { // Add onViewItemClick prop
    return ( 
        <div className='list-card'>

            {/* header list card */}
            <div className="header_list-card">
                <div className="header-text_list-card">
                    <span className='header-title_list-card'>{cardItem.title}</span>

                    <div className="list-stats_list-card">
                        <div className="stats-slider">
                            <span className='share-counter_stats'>Shared with 2 people</span>

                            <span className='update-status_stats'>Updated 2 hours ago</span>

                            <span className='items-tracker_stats'>5 of 10 items</span>

                            <span className='share-counter_stats'>Shared with 2 people</span>
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