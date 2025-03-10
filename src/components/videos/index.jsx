import React, {useRef} from "react"
import {useTranslation} from "react-i18next"

// img
import card1 from "../../assets/img/videos/1.png"
import card2 from "../../assets/img/videos/2.png"
import card3 from "../../assets/img/videos/3.png"
import card4 from "../../assets/img/videos/2.png"

// icons
import {BsPlayCircleFill} from "react-icons/bs"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6"

// Swiper
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const Videos = () => {
    const {t} = useTranslation()
    const videos = [card1, card2, card3, card4]
    const swiperRef = useRef(null)

    const slideNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext()
    }

    const slidePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev()
    }

    return (
        <section className="py-[40px] relative">
            <div className="container2">
                <h1 className="title mb-[30px]">{t("videosTitle")}</h1>

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={25}
                    slidesPerView={3}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        200: {slidesPerView: 1},
                        590: {slidesPerView: 2},
                        1110: {slidesPerView: 3},
                    }}
                    className="mySwiper">
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-[10px] rounded-2xl border flex justify-center items-center border-[#3d3d3d] h-[550px] max-[380px]:h-[400px] relative">
                                <img
                                    src={video}
                                    alt=""
                                    className="h-full w-full object-cover rounded-xl select-none"
                                />
                                <BsPlayCircleFill className="absolute z-10 text-[50px] cursor-pointer active:scale-[.98] text-[#ecebeb]" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end items-center gap-[10px] mt-5 max-[520px]:justify-center">
                    <button
                        onClick={slidePrev}
                        className="border border-[#3d3d3d] p-[10px] rounded-lg text-white cursor-pointer select-none">
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={slideNext}
                        className="border border-[#3d3d3d] p-[10px] rounded-lg text-white cursor-pointer select-none">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Videos
