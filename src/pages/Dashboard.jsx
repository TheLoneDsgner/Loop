import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../components/Button/Button';
import NavBarDash from '../components/NavBarDash';
import  './Dashboard.modules.css'
import Tab from '../components/Tab/Tab';

import DashboardHome from './DashboardHome';
import DashboardShared from './DashboardShared';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('home');

    return ( 
        <>
            <div className="dashboard-main">
                <NavBarDash                
                    backButton={ <Button variant='systemIcon' size='lg'>
                        <ChevronLeft size={24} />
                    </Button>}>                    
                </NavBarDash>
                
                <div className="content-container">
                    <div className="tab-wrapper">
                        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>

                    <div className="dashboard-container">
                        {activeTab === 'home' && <DashboardHome />}
                        {activeTab === 'shared' && <DashboardShared />}
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Dashboard;