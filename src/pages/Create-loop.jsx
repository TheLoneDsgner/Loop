import './CreateLoop.modules.css'
import NavBarDash from "../components/NavBarDash";
import Button from "../components/Button/Button";
import { ChevronLeft, Check, Share } from "lucide-react";
import HeaderCreate from '../components/HeaderCreate';

const CreateList = (props) => {
    return ( 
        <div className="create-list_main">
            <NavBarDash />

            <div className="create_container">
                    <HeaderCreate
                        createBackButton={<Button variant='systemIcon' size='lg' > <ChevronLeft size={24} aria-label='chevron left icon' /> </Button>}

                        headerText={'Create a list'}

                        // shareBtn={<Button size='lg'> <Share aria-label='arrow right icon' size={24} /> Share</Button>}

                        // saveBtn={<Button size='lg'> <Share aria-label='arrow right icon' size={24} /> Share</Button>}
                                 
                        shareBtn={
                            <div className="header-buttons">
                                <div><Button variant='disabled' size='lg'> <Share size={20} /> Share</Button></div>
                            </div>
                        }
                        saveBtn={
                            <div className="header-buttons">
                                <div><Button variant='disabled' iconOnly size='lg'> <Check size={24} /></Button></div>
                            </div>
                        }
                    > </HeaderCreate>


                    

                    

                <div className="list-and-form_container">
                    <div className="list_wrapper"></div>
                    <div className="form_wrapper"></div>
                </div>
            </div>

            <h1>jgdgndn</h1>
        </div>
     );
}
 
export default CreateList;
  