import SectionTitle from "../../share/sectionTitle/SectionTitle";
import MenuItem from "../../share/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const {menu} = useMenu()
    const popularItem = menu && menu.filter(item => item.category === 'popular')

    return (
        <section className="mt-20 mb-32 max-width">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularItem && popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="text-center mt-12">
                <button className="btn btn-outline border-0 border-b-2 text-xl rounded-md font-normal  hover:bg-sub-title hover:border-sub-title hover:text-black px-6">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;