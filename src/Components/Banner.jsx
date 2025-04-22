import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import books from "../assets/bannerImages/books.png";
import book1 from "../assets/bannerImages/book-1.png";
import book2 from "../assets/bannerImages/book-2.png";
import singleBook from "../assets/bannerImages/slingleBook.png";
import { Slide, Zoom } from "react-awesome-reveal";
import { IoPricetagsOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="mt-16">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#FBE9DF] font-Inter h-screen md:h-auto">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="py-10 space-y-4 flex-shrink-0">
                  <div className="flex items-center gap-x-2">
                    <IoPricetagsOutline></IoPricetagsOutline>
                    <h5 className="uppercase text-xs tracking-widest">
                      Pre-Order
                    </h5>
                  </div>
                  <Slide cascade>
                    <h2 className="text-5xl  leading-snug">
                      The design <br /> of George Cetara
                    </h2>
                    <p className="uppercase text-xs">
                      Pre-Order The Magic Today. Relase 24 DECEMBER 2021
                    </p>
                  </Slide>
                  <Zoom delay={1000}>
                    <button className="mt-6 tracking-widest uppercase py-4 text-xs border-0 btn btn-wide bg-[#FFB237] hover:bg-[#d62928] hover:text-white">
                      Pre-Order Now - 59$
                    </button>
                  </Zoom>
                </div>
                <div className="flex-1">
                  <Slide direction="right">
                    <img
                      className="mt-12 md:mt-0 h-auto w-lg md:w-full"
                      src={books}
                      alt="Image"
                    />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FBE9DF] font-Inter h-screen md:h-auto">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-48">
                <div className="space-y-4 py-10">
                  <div className="flex items-center gap-x-2">
                    <IoPricetagsOutline></IoPricetagsOutline>
                    <h5 className="uppercase text-xs tracking-widest">
                      Sale Up to
                    </h5>
                  </div>
                  <Slide cascade>
                    <h2 className="text-5xl  leading-snug">
                      The Story About <br /> Ms. Rooster
                    </h2>
                    <p className="uppercase   text-xl font-bold tracking-widest">
                      40% Off
                    </p>
                  </Slide>
                  <Zoom delay={1000}>
                    <button className="mt-6 text-white uppercase py-6 tracking-widest text-xs border-0 btn btn-wide bg-[#d62928] hover:bg-[#FFB237]">
                      Shop Now
                    </button>
                  </Zoom>
                </div>
                <div className="">
                  <Slide direction="right">
                    <img
                      className="w-sm md:w-[600px] "
                      src={singleBook}
                      alt="Image"
                    />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFCB67] font-Inter h-screen md:h-auto">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between py-8">
                <div className="hidden lg:block">
                  <Slide>
                    <img className="w-72" src={book1} alt="Image" />
                  </Slide>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex items-center gap-x-2">
                    <IoPricetagsOutline></IoPricetagsOutline>

                    <h5 className="uppercase text-xs tracking-widest text-center">
                      Speacial Offer
                    </h5>
                  </div>
                  <Slide direction="down">
                    <h2 className="text-5xl  leading-snug text-center">
                      Books to Freshen up <br /> Your Bookshelf
                    </h2>
                    <p className="uppercase text-xs text-center">
                      Only 2 days: November 11th & 12th{" "}
                    </p>
                  </Slide>
                  <Zoom delay={500}>
                    <button className="mt-6 px-14 tracking-widest text-white uppercase py-5 text-xs border-0 btn bg-[#201c1c] hover:bg-[#d62928]">
                      Shop Now
                    </button>
                  </Zoom>
                </div>
                <div className="mt-10">
                  <Slide direction="right">
                    <img className="w-72" src={book2} alt="Image" />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
