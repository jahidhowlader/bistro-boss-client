import { Link } from "react-router-dom";
import Cover from "../../share/cover/Cover";
import MenuItem from "../../share/menuItem/MenuItem";

const MenuCategory = ({ items, bgImg, height, imageAlt, title, details }) => {
    return (
        <div className=" mt-16 mb-32">
            {
                title && <Cover
                    bgImg={bgImg}
                    height={height}
                    imageAlt={imageAlt}
                    title={title}
                    details={details}
                ></Cover>
            }
            <div className="grid md:grid-cols-2 gap-6 max-width mt-16">
                {
                    items && items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-12">
                <Link to={`/shop/${title && title.toLocaleLowerCase()}`} className="btn btn-outline border-0 border-b-2 text-xl rounded-md font-normal  hover:bg-sub-title hover:border-sub-title hover:text-black px-6">View Full  Menu</Link>
            </div>
        </div>
    );
};

export default MenuCategory;