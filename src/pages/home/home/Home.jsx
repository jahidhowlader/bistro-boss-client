import Banner from "../banner/Banner";
import Category from "../category/Category";
import CheifService from "../cheifService/CheifService";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
            <PopularMenu></PopularMenu>
        </>
    );
};

export default Home;