import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Card from '../../../components/Card';


const NewProductSlider = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={0}
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            breakpoints={{
                769: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            }}
            navigation={true}
            modules={[Keyboard, Navigation,]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default NewProductSlider;