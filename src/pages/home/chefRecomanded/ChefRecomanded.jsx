import SectionTitle from "../../share/sectionTitle/SectionTitle";
import card1 from '../../../assets/home/slide1.jpg'
import card2 from '../../../assets/home/slide2.jpg'
import card3 from '../../../assets/home/slide3.jpg'

const ChefRecomanded = () => {
    return (
        <section className="my-32">
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>

            <div className="max-width grid grid-cols-3 gap-6">
                <div className="card bg-grey rounded-none">
                    <img src={card1} alt="salads" className="" style={{ height: "300px" }} />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline bg-btn-grey border-0 border-b-2 border-sub-title text-sub-title hover:text-sub-title rounded-md px-6 text-lg font-normal mt-4">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-grey rounded-none">
                    <img src={card2} alt="pizza" className="" style={{ height: "300px" }} />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline bg-btn-grey border-0 border-b-2 border-sub-title text-sub-title hover:text-sub-title rounded-md px-6 text-lg font-normal mt-4">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-grey rounded-none">
                    <img src={card3} alt="Soup" className="" style={{ height: "300px" }} />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline bg-btn-grey border-0 border-b-2 border-sub-title text-sub-title hover:text-sub-title rounded-md px-6 text-lg font-normal mt-4">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecomanded;