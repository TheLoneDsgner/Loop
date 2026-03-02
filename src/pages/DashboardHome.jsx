import { Library, Plus, ExternalLink, Link } from "lucide-react";
import PageHeader from "../components/HeaderDashboard";
import Button from "../components/Button/Button";
import './Dashboard.modules.css'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Card from "../components/Card/Card";
import useLoops from "../components/useLoops";
import Overlay from "../components/Modals/Overlay";
import PreviewItem from "../components/Modals/PreviewList";
import ModalShare from '../components/Modals/ModalShare';
import { useState } from 'react';


const DashboardHome = () => {
    const [loops] = useLoops();
    const yourLists = loops.filter(loop => loop.category === 'Your list');
    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [selectedLoop, setSelectedLoop] = useState(null);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false)
    const navigate = useNavigate();

    const handleViewItemClick = (loop) => {
        setSelectedLoop(loop);
        setShowPreviewModal(true);
    };

    const handleClosePreviewModal = () => {
        setShowPreviewModal(false);
        setSelectedLoop(null);
    };

    const handleShareClick = () => {
        setShowPreviewModal(false);
        setShowShareModal(true);
    };

    const handleCloseShareModal = () => {
        setShowShareModal(false);
        setSelectedLoop(null);
    };

    const handleCopyLink = () => {
        if (!selectedLoop) return;

        const listDataToShare = {
            title: selectedLoop.title,
            description: selectedLoop.description,
            items: selectedLoop.items,
        };

        const encodedData = encodeURIComponent(JSON.stringify(listDataToShare));
        const linkToCopy = `https://useloop.com/share?data=${encodedData}`;

        navigator.clipboard.writeText(linkToCopy).then(() => {
            setShowCopiedMessage(true);
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleEditClick = (item) => {
        setShowPreviewModal(false);
        navigate('/create-loop', { state: { loopToEdit: item } });
    };

    return ( 
        <div className="dashboard-home-container">

            <div className="dashboard-home">
                <PageHeader
                    headerIcon={<Library size={20}/>}
                    title={'Your lists'}
                    count={yourLists.length}
                    pageDesc={'Everything you’re planning, kept in sync.'}

                    createButton={<Button variant='primary' size='md'>Create a list</Button>}

                    createIcon={<Button iconOnly > <Plus /> </Button>} >
                </PageHeader>

                {yourLists.length === 0 ? (
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
                            <RouterLink to="/create-loop">
                                <Button variant='primary' size='md'>Create your first list</Button>
                            </RouterLink>
                        </div>
                    </div>
                ) : (
                    <div className="lists-container">
                        {yourLists.map((loop) => (
                            <Card
                            key={loop.id}
                            cardItem={loop}
                            onViewItemClick={() => handleViewItemClick(loop)}
                            viewItemBtn={
                            <Button iconOnly size='md' variant='secondary'>
                                <ExternalLink size={20} />
                            </Button>}
                            />
                        ))}
                    </div>
                )}
            </div>
            {showPreviewModal && selectedLoop && (
                <Overlay isOpen={showPreviewModal} >
                    <PreviewItem
                        onClose={handleClosePreviewModal} item={selectedLoop}
                        onShare={handleShareClick}
                        onEdit={handleEditClick}
                    />
                </Overlay>
            )}

            {showShareModal && selectedLoop && (
                <ModalShare
                    isOpen={showShareModal}
                    onClose={handleCloseShareModal}
                    title="Share your loop"
                    description="Anyone with the link can view this loop."
                >
                    <div className="modalActionsContent">
                        <div className="modal-action">
                            <Button
                                onClick={handleCopyLink}
                                variant="primary"
                            >
                                <Link size={20} />
                                Copy link
                            </Button>
                        </div>

                        {showCopiedMessage && (
                            <span className="copiedMessage">Link copied. You’re good to share.</span>
                        )}
                    </div>
                    
                </ModalShare>
            )}
        </div>
     );
}
 
export default DashboardHome;

// onClose={handleClosePreviewModal}
