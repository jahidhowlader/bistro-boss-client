
const MenuItem = ({ item }) => {

    const { name, recipe, price, image } = item
    return (
        <div  className="flex gap-8">
            <img style={{ width: "118px", height: "104px", borderRadius: "0 200px 200px 200px" }} src={image} alt={name} />

            <div>
                <h6 className="uppercase text-xl pb-2">{name}  ------------------</h6>
                <p>{recipe}</p>
            </div>

            <p className="text-sub-title">{price}</p>
        </div>
    );
};

export default MenuItem;