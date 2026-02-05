import { Library } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button/Button";
import './Dashboard.modules.css'


const DashboardHome = () => {
    return ( 
        <div>
            <PageHeader
                headerIcon={<Library size={24}/>}
                title={'Your lists'}
                count={'4'}
                pageDesc={'Everything you’re planning, kept in sync.'}

                createButton={<Button variant='primary' size='md'>Create a list</Button>}
            >
            </PageHeader>

            <div className="lists-container">
                <h1>home</h1>
                <span>my list</span>
            </div>

        </div>
     );
}
 
export default DashboardHome;

