import Card from "../../components/Card";
import Container from "../../components/Container";
import AdsSection from "./adssection/AdsSection";
import SpecialAds from "./adssection/SpecialAds";
import Banner from "./banner/Banner";
import NewArrival from "./newarrival/NewArrival";
import BestSeller from "./ourbestsellers/BestSeller";
import SpecialOffers from "./specialoffer/SpecialOffers";


const Home = () => {
    return (
        <div>
            <Banner/>

            <Container>
                <AdsSection/>

                <div className="py-10">
                    <NewArrival/>
                    <BestSeller/>
                </div>
                <SpecialAds/>
                <div className="py-10">
                    <SpecialOffers/>
                </div>
            </Container>
            
        </div>
    );
};

export default Home;