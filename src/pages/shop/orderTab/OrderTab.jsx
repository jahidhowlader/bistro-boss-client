import FoodCard from '../../share/foodCard/Foodcard';

const OrderTab = ({itmes}) => {
    return (
        <div className="max-width grid grid-cols-3 gap-6 my-16">
            {
                itmes.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    image={item.image}
                    title={item.name}
                    details={item.recipe}
                    price={item.price}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;