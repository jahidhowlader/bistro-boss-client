import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import CheifService from "../cheifService/CheifService";
import Contact from "../contact/Contact";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import FoodCard from "../../share/foodCard/Foodcard";
import card1 from '../../../assets/home/slide1.jpg'
import card2 from '../../../assets/home/slide2.jpg'
import card3 from '../../../assets/home/slide3.jpg'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | BISTRO BOSS</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>

            {/* Chef Recomanded */}
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <section className="my-16">
                <div className="max-width grid grid-cols-3 gap-6">
                    <FoodCard
                        image={card1}
                        title="Caeser Salad"
                        details="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    ></FoodCard>
                    <FoodCard
                        image={card2}
                        title="Caeser Pizza"
                        details="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    ></FoodCard>
                    <FoodCard
                        image={card3}
                        title="Caeser Soup"
                        details="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    ></FoodCard>
                </div>
            </section>

            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;