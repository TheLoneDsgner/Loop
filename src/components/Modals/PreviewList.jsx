import './PreviewList.modules.css'
import Button from '../Button/Button';
import { Share, X, Info, FilePenLine  } from 'lucide-react'; // Import the close icon
import ListItemCard from '../List-items/ListItemCard';

const PreviewItem = ({ onClose, item, onShare, onEdit }) => {
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
                    <Button variant='primary' size='md' onClick={onShare}>
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
                            <span className='share-counter_stats'>Shared with 2 people</span>

                            <span className='update-status_stats'>Updated 2 hours ago</span>

                            <span className='items-tracker_stats'>5 of 10 items</span>

                            <span className='share-counter_stats'>Shared with 2 people</span>
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
                    <span className='instruction-text'>Tap to edit list</span>
                </div>

                <Button variant='secondary' size='md' onClick={() => onEdit(item)}><FilePenLine size={20}/> Edit list</Button>
            </div>

        </div>
    );
}
 
export default PreviewItem;