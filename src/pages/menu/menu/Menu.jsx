import { Helmet } from "react-helmet-async";
import Cover from "../../share/cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/menuCategory";
import bgCover from '../../../assets/menu/banner3.jpg'
import bgCoverDessert from '../../../assets/menu/dessert-bg.jpeg'
import bgCoverPizza from '../../../assets/menu/pizza-bg.jpg'
import bgCoverSalad from '../../../assets/menu/salad-bg.jpg'
import bgCoverSoup from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {

    const { menu } = useMenu()

    const offered = menu && menu.filter(item => item.category === 'offered')
    const desserts = menu && menu.filter(item => item.category === 'dessert')
    const pizza = menu && menu.filter(item => item.category === 'pizza')
    const salad = menu && menu.filter(item => item.category === 'salad')
    const soup = menu && menu.filter(item => item.category === 'soup')

    return (
        <>
            <Helmet>
                <title>Menu | BISTRO BOSS</title>
            </Helmet>
            <Cover
                bgImg={bgCover}
                height={"800px"}
                imageAlt="the menu"
                title="OUR MENU"
                details="Would you like to try a dish?"
            ></Cover>

            {/* Offerd */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert */}
            <MenuCategory
                items={desserts}
                bgImg={bgCoverDessert}
                height={"700px"}
                imageAlt="DESSERTS"
                title="DESSERTS"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* Pizza */}
            <MenuCategory
                items={pizza}
                bgImg={bgCoverPizza}
                height={"700px"}
                imageAlt="PIZZA"
                title="PIZZA"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* Salad */}
            <MenuCategory
                items={salad}
                bgImg={bgCoverSalad}
                height={"700px"}
                imageAlt="SALAD"
                title="SALAD"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* Soup */}
            <MenuCategory
                items={soup}
                bgImg={bgCoverSoup}
                height={"700px"}
                imageAlt="SOUP"
                title="SOUP"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
        </>
    );
};

export default Menu;