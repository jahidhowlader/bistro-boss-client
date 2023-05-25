import featureImage from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-background py-32 text-white mt-32">
                <div className="text-center mx-auto mt-4 mb-12 w-3/12">
                    <p className="text-sub-title pb-5">---Check it out---</p>
                    <h3 className="text-4xl border-y-2 border-white py-3">FROM OUR MENU</h3>
                </div>

                <div className='max-width grid md:grid-cols-2 gap-16 items-center'>
                    <div>
                        <img src={featureImage} alt="feature image" />
                    </div>

                    <div >
                        <p>March 20, 2023</p>
                        <p className='text-xl pt-3'>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <div className="mt-8">
                            <button className="btn btn-outline border-0 border-b-2 text-xl rounded-md text-white font-normal px-6 hover:bg-sub-title hover:border-sub-title hover:text-black">Order Now</button>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Featured;