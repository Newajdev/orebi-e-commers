import Container from "../../components/Container";
import AdsSection from "./adssection/AdsSection";
import SpecialAds from "./adssection/SpecialAds";
import Banner from "./banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>

            <Container>
                <AdsSection/>

                <SpecialAds/>
            </Container>
            
        </div>
    );
};

export default Home;