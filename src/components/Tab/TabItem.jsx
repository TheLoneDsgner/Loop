import PropTypes from 'prop-types';
import styles from './TabItems.module.css'

const TabItem = ({
    children,
    state = 'active',
    className = '',
    ...props
}) => {

    const tabItemClassess = [
        styles.tabItem,
        styles[state]
    ].join(' ').trim();


    return ( 
        <div
            className={tabItemClassess}>
            {children}
        </div>
     );
}

TabItem.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.oneOf(['active', 'default'])
}
 
export default TabItem;