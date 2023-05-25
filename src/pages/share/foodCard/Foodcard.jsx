const FoodCard = ({ image, title, details, price }) => {
    return (
        <div className="card bg-grey rounded-none relative">
            {price && <p className="bg-black text-white px-5 py-2 absolute right-5 top-5">${price}</p>}
            <img src={image} alt="salads" className="" style={{ height: "300px" }} />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-btn-grey border-0 border-b-2 border-sub-title text-sub-title hover:text-sub-title rounded-md px-6 text-lg font-normal mt-4">add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;