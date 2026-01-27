import NavBar from "../components/NavBar";
import Button from "../components/Button/Button";
import { ArrowRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const Home = () => {
    return ( 
        <div className="home">
            <div className="hero">
                <NavBar
                    // backButton={<ChevronLeft size={24}/>}
                    
                    viewDashboard={ <Button variant="secondary">View Recent List {<ArrowRight aria-label="arrow icon" size={20}/>}</Button>}
                />
            </div>
        </div>
     );
}
 
export default Home;