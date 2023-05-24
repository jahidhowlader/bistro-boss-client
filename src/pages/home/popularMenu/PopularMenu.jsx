import { useEffect, useState } from "react";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import MenuItem from "../../share/menuItem/MenuItem";

const PopularMenu = () => {

    const [popularItem, setPopularItem] = useState([])

    useEffect(() => {

        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data=> {
                const items = data.filter(item => item.category === 'popular')
                setPopularItem(items)
            })
    }, [])

    return (
        <section className="my-20 max-width">
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
        </section>
    );
};

export default PopularMenu;