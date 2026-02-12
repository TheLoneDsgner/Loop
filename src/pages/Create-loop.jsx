import './CreateLoop.modules.css'
import NavBarDash from "../components/NavBarDash";
import Button from "../components/Button/Button";
import { ChevronLeft, Check, Share } from "lucide-react";
import HeaderCreate from '../components/HeaderCreate';

const CreateList = ( ) => {
    return ( 
        <div className="create-list_main">
            <NavBarDash />

            <div className="create_container">
                    <HeaderCreate
                        createBackButton={<Button variant='systemIcon' size='md' > <ChevronLeft size={24} aria-label='chevron left icon' /> </Button>}

                        headerText={'Create a list'}
                                 
                        shareBtn={
                            <div className="header-buttons">
                                <div><Button variant='secondary' disabled size='md'> <Share size={20} /> Share</Button></div>
                            </div>
                        }
                        saveBtn={
                            <div className="header-buttons">
                                <div><Button disabled iconOnly size='md'> <Check size={24} /></Button></div>
                            </div>
                        }
                    > </HeaderCreate>                  

                <div className="list-and-form_container">
                    <div className="list_container">
                        <div className="header_list-container">

                        </div>
                        <div className="list-items-wrapper">

                        </div>
                        <div className="footer_list-container">

                        </div>
                    </div>

                    <div className="form_wrapper"></div>
                </div>
            </div>
        </div>
     );
}
 
export default CreateList;
  