import NavBarDash from "../components/NavBarDash";
import Button from "../components/Button/Button";
import { ChevronLeft } from "lucide-react";

const CreateList = () => {
    return ( 
        <div className="create-list_main">
            <NavBarDash
                backButton={
                    <Button variant="systemIcon" size="lg">
                        <ChevronLeft size={24} />
                    </Button>
                }
            ></NavBarDash>
        </div>
     );
}
 
export default CreateList;
  