import { ChevronLeft } from 'lucide-react';
import Button from '../components/Button/Button';
import NavBarDash from '../components/NavBarDash';
import  './Dashboard.modules.css'

const Dashboard = () => {
    return ( 
        <>
            <div className="dashboard-main">
                <NavBarDash
                
                    backButton={ <Button variant='systemIcon' size='lg'>
                        <ChevronLeft size={24} />
                    </Button>}>                    
                </NavBarDash>
                
                <div className="content-container">

                </div>
            </div>
        </>
     );
}
 
export default Dashboard;