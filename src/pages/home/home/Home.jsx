import Banner from "../banner/Banner";
import Category from "../category/Category";
import ChefRecomanded from "../chefRecomanded/chefRecomanded";
import CheifService from "../cheifService/CheifService";
import Contact from "../contact/Contact";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecomanded></ChefRecomanded>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;