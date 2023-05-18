import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>

            <ChooseUs></ChooseUs>
            <Mission></Mission>
        </div>
    );
};

export default Home;