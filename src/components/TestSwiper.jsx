import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IoIosStar } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';

const TestSwiper = () => {
  return (
    <section className="pb-[60px]">
      <div className="container mx-auto max-w-[1440px] w-full">
        <h1 className="md:text-[48px] font-bold text-center">
          OUR HAPPY CUSTOMERS
        </h1>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          <SwiperSlide className="flex justify-center">
            <div className="w-full max-w-[450px] h-[200px] border-[2px] border-[#0000001A] rounded-[20px] p-5">
              <span className="flex items-center gap-2 text-yellow-500 mb-5">
                <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
              </span>
              <h1 className="flex items-center gap-2 mb-2">
                Sarah M.
                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] text-sm mt-3">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <div className="w-full max-w-[450px] h-[200px] border-[2px] border-[#0000001A] rounded-[20px] p-5">
              <span className="flex items-center gap-2 text-yellow-500 mb-5">
                <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
              </span>
              <h1 className="flex items-center gap-2 mb-2">
                Alex K.
                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] text-sm mt-3">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options is truly remarkable.”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <div className="w-full max-w-[450px] h-[200px] border-[2px] border-[#0000001A] rounded-[20px] p-5">
              <span className="flex items-center gap-2 text-yellow-500 mb-5">
                <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
              </span>
              <h1 className="flex items-center gap-2 mb-2">
                James L.
                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] text-sm mt-3">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.”
              </p>
            </div>
          </SwiperSlide>

           <SwiperSlide className="flex justify-center">
            <div className="w-full max-w-[450px] h-[200px] border-[2px] border-[#0000001A] rounded-[20px] p-5">
              <span className="flex items-center gap-2 text-yellow-500 mb-5">
                <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
              </span>
              <h1 className="flex items-center gap-2 mb-2">
                James L.
                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] text-sm mt-3">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestSwiper;
