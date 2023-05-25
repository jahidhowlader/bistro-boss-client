import { useEffect, useState } from "react";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import MenuItem from "../../share/menuItem/MenuItem";

const PopularMenu = () => {

    const [popularItem, setPopularItem] = useState([])

    useEffect(() => {

        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category === 'popular')
                setPopularItem(items)
            })
    }, [])

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