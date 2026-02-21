import { ExternalLink } from 'lucide-react';
import Button from '../Button/Button';
import './Card.modules.css'
import ListItemCard from '../List-items/ListItemCard';
const Card = () => {
    return ( 
        <div className='list-card'>

            {/* header list card */}
            <div className="header_list-card">
                <div className="header-text_list-card">
                    <span className='header-title_list-card'>Weekly groceries</span>

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
                    <Button iconOnly size='md' variant='secondary'> <ExternalLink size={20} /> </Button>
                </div>
            </div>

            {/* list items */}
            <div className="list-items_list-card">
                <div className="list-counter_list-items">
                    <span className='list-label_list-items'>Lists</span>
                    <span className='counter_list-items'>0</span>
                </div>

                <div className="list-items_wrapper">
                    <ListItemCard />
                    <ListItemCard />
                    <ListItemCard />
                    <ListItemCard />
                </div>

            </div>

        </div>
     );
}
 
export default Card;