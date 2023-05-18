import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";
import Categories from "../components/categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>

                <Categories></Categories>

            <ChooseUs></ChooseUs>
            <Mission></Mission>
        </div>
    );
};

export default Home;