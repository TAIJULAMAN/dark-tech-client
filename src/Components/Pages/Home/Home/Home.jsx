import About from "../About/About";
import Accordian from "../Accordian/Accordian";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Hero/>
           <About/>
           <Accordian/>
           <Team/>
           <Reviews/>
        </div>
    );
};

export default Home;