import NavBar from "../components/NavBar";
import Button from "../components/Button/Button";
import { ArrowRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
    return ( 
        <div className="home">

            <NavBar />

            <div className="hero">
                <Hero />
            </div>
        </div>
     );
}
 
export default Home;