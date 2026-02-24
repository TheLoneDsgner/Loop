const ListItemCard = ({ item }) => {
    const itemIcon = "src/assets/icons/Check-icon-default.svg"
    return ( 
        <div className="list-item_card">
            <div className="icon_list-item-card">
                <img src={itemIcon} alt="item icon" />
            </div>
            <p>{item}</p>
        </div>
     );
}
 
export default ListItemCard;