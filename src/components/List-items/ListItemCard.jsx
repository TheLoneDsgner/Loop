// import mark from '.'
const ListItemCard = () => {
    const itemIcon = "src/assets/icons/Check-icon-default.svg"
    return ( 
        <div className="list-item_card">
            <div className="icon_list-item-card">
                <img src={itemIcon} alt="item icon" />
            </div>
            <p>Item</p>
        </div>
     );
}
 
export default ListItemCard;