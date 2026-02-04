import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HighlightSection from "../components/Highlight";
import FooterAndCta from "../components/FooterAndCta";
import Button from "../components/Button/Button";
import { ArrowRight } from "lucide-react";
import { Menu } from "lucide-react";

const Home = () => {
    return ( 
        <div className="home">

            <NavBar
                navButton={<Button variant="secondary" size="lg" >View Recent List <ArrowRight aria-label="arrowicon" size={20} /></Button>}
                
                navMenu={<Menu aria-label="menu icon" size={28} />}

            />


            <Hero />

            <Features />

            <HighlightSection />

            <FooterAndCta />
        </div>
     );
}
 
export default Home;