import PageHeader from "../components/PageHeader";
import { Share } from "lucide-react";

const DashboardShared = () => {
    return ( 
        <div>
            <PageHeader
                headerIcon={<Share size={24}/>}
                title={'Shared lists'}
                count={'0'}
                pageDesc={'Lists people share with you, kept in sync.'}
            ></PageHeader>
        </div>
     );
}
 
export default DashboardShared;

