import HeaderDashboard from "../components/HeaderDashboard";
import { Share } from "lucide-react";

const DashboardShared = () => {
    return ( 
        <div>
            <HeaderDashboard
                headerIcon={<Share size={24}/>}
                title={'Shared lists'}
                count={'0'}
                pageDesc={'Lists people share with you, kept in sync.'}
            ></HeaderDashboard>
        </div>
     );
}
 
export default DashboardShared;

