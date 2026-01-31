import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HighlightSection from "../components/Highlight";
import FooterAndCta from "../components/FooterAndCta";

const Home = () => {
    return ( 
        <div className="home">

            <NavBar />

            <Hero />

            <Features />

            <HighlightSection />

            <FooterAndCta />
        </div>
     );
}
 
export default Home;