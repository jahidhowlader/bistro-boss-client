import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../share/sectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Testimonials.css'

// import required modules
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {

        fetch('/public/review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    return (
        <section className="my-32 max-width">
            <SectionTitle
                subHeading="-What Our Clients Say"
                heading="TESTIMONIALS"
            ></SectionTitle>

            <div className="">

                <Swiper 
                loop={true}
                navigation={true} 
                modules={[Pagination, Navigation]} 
                className="mySwiper">

                    {
                        reviews && reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                          <div className="px-28 flex flex-col items-center">
                          <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <FaQuoteLeft className="text-8xl mt-10"></FaQuoteLeft>

                            <p className="text-center mb-2 mt-10">{review.details}</p>
                            <h5 className="text-sub-title uppercase text-3xl">{review.name}</h5>
                          </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;