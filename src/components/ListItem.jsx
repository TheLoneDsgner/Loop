import React, { useEffect, useRef } from 'react';
import './ListItem.modules.css'
import { GripVertical, Trash } from "lucide-react";

const ListItem = ({item, onRemove, index, onEdit}) => {
    const itemRef = useRef(null);

    useEffect(() => {
        if (itemRef.current) {
            itemRef.current.classList.add('item-enter-active');
        }
    }, []);

    return ( 
        <div className="list-item" ref={itemRef} onClick={() => onEdit(item, index)}>
            <div className="drag-icon"> <GripVertical size={20} /> </div>
            <div className="item">{ item }</div>
            <div className="trash-icon" onClick={(e) => { e.stopPropagation(); onRemove(index); }}><Trash /></div>
        </div>
     );
}
 
export default ListItem;