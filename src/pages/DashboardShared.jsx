import HeaderDashboard from "../components/HeaderDashboard";
import { Share,  } from "lucide-react";

const DashboardShared = () => {
    return ( 
        <div className="dashboard-shared-container">
            {/* emty state */}
            <div className="empty-state_dashboard">
                <div className="image-and-text_empty-state">
                    <div className="image-wrapper_empty-state">
                        <Share size={40} />
                    </div>
                    <div className="text-wrapper_empty-state">
                        <span>Nothing shared yet</span>
                        <p>Lists people share with you will show up here.</p>
                    </div>
                </div>
            </div>


            <div className="dashboard-shared">
                <HeaderDashboard
                    headerIcon={<Share size={20}/>}
                    title={'Shared lists'}
                    count={'0'}
                    pageDesc={'Lists people share with you, kept in sync.'}>
                </HeaderDashboard>
            </div>

        </div>
     );
}
 
export default DashboardShared;

