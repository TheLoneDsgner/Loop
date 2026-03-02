import HeaderDashboard from "../components/HeaderDashboard"
import { Share } from "lucide-react"
import Card from "../components/Card/Card"
import useLoops from "../components/useLoops"

const DashboardShared = () => {
    const [loops] = useLoops()
    const sharedLists = loops.filter(loop => loop.category === 'Shared List')

    return ( 
        <div className="dashboard-shared-container">
            <div className="dashboard-shared">
                <HeaderDashboard
                    headerIcon={<Share size={20}/>}
                    title={'Shared lists'}
                    count={sharedLists.length}
                    pageDesc={'Lists people share with you, kept in sync.'}>
                </HeaderDashboard>

                {sharedLists.length === 0 ? (
                    <div className="empty-state-shared_dashboard">
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
                ) : (
                    <div className="lists-shared-container">
                        {sharedLists.map((loop) => (
                            <Card
                                key={loop.id}
                                cardItem={loop}
                                // Placeholder for now, specific actions for shared items can be added later
                                onViewItemClick={() => console.log('View shared item:', loop.id)}
                                viewItemBtn={null} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
     )
}
 
export default DashboardShared
