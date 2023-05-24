// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import image form loacally
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../share/sectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className=" max-width mt-20">
            <SectionTitle
                heading="ORDER ONLINE"
                subHeading="From 11:00am to 10:00pm"
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                // spaceBetween={-90}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper pb-20 mb-24"
            >
                <SwiperSlide>
                    <div>
                        <img src={slide1} alt="slide1" />
                        <h3 className="text-3xl -mt-16 text-white text-center uppercase">Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide2" />
                    <h3 className="text-3xl -mt-16 text-white text-center uppercase">pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide3" />
                    <h3 className="text-3xl -mt-16 text-white text-center uppercase">Soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide4" />
                    <h3 className="text-3xl -mt-16 text-white text-center uppercase">desserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide5" />
                    <h3 className="text-3xl -mt-16 text-white text-center uppercase">Salads</h3>

                </SwiperSlide>
                {/* <SwiperSlide>
                {slide2}
            </SwiperSlide>
            <SwiperSlide>
                {slide3}
            </SwiperSlide>
            <SwiperSlide>
                {slide4}
            </SwiperSlide>
            <SwiperSlide>
                {slide5}
            </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Category;