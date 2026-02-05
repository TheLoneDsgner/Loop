import PropTypes from 'prop-types';
import './Tab.modules.css'
import TabItem from './TabItem';
import { Library, Share } from "lucide-react";

const Tab = ({ activeTab, setActiveTab }) => {
  return ( 
    <div className="tab">
        <div className="tab-links">
            <div onClick={() => setActiveTab('home')} className="tab-link-wrapper">
                <TabItem state={activeTab === 'home' ? 'active' : 'default'}>
                    <Library size={20}/>
                    <span>Home</span>
                </TabItem>
            </div>
            
            <div onClick={() => setActiveTab('shared')} className="tab-link-wrapper">
                <TabItem state={activeTab === 'shared' ? 'active' : 'default'}>
                    <Share size={20}/>
                    <span>Shared</span>
                </TabItem>
            </div>
        </div>
    </div>
   );
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};
 
export default Tab;