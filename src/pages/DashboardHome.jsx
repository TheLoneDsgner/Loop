import { Library, Plus } from "lucide-react";
import PageHeader from "../components/HeaderDashboard";
import Button from "../components/Button/Button";
import './Dashboard.modules.css'
import { Link } from 'react-router';
import Card from "../components/Card/Card";


const DashboardHome = () => {
    return ( 
        <div className="dashboard-home-container">


            <div className="dashboard-home">
                <PageHeader
                    headerIcon={<Library size={20}/>}
                    title={'Your lists'}
                    count={'4'}
                    pageDesc={'Everything you’re planning, kept in sync.'}

                    createButton={<Button variant='primary' size='md'>Create a list</Button>}

                    createIcon={<Button iconOnly > <Plus /> </Button>} >
                </PageHeader>

                {/* emty state */}
                <div className="empty-state-home_dashboard">
                    <div className="image-and-text_empty-state">
                        <div className="image-wrapper_empty-state">
                            <Library size={40} />
                        </div>
                        <div className="text-wrapper_empty-state">
                            <span>Start with a list</span>
                            <p>Groceries, errands, or plans, write it down and share it when you’re ready.</p>
                        </div>
                    </div>

                    <div className="action-empty-state_dashboard">
                        <Link to="/create-loop">
                            <Button variant='primary' size='md'>Create your first list</Button>
                        </Link>
                    </div>
                </div>


                {/* list cards wrapper */}
                <div className="lists-container">
                    {/* <div className="list-test">

                    </div> */}
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardHome;

