// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper 
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop = {Infinity}
            modules={[Navigation, Autoplay]} 
            className="mySwiper max-w-[90%] xl:max-w-[1200px] mx-auto rounded-xl">
                <SwiperSlide>
                    <div
                    className='mx-auto bg-center bg-cover h-[calc(100vh-100px)]'
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
                    }}
                    >
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                            Build your new <span className='text-blue-400'>Saas</span> Project
                        </h1>
                        <br />
                        <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Post Job & Hire Expert
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                    className='mx-auto bg-center bg-cover h-[calc(100vh-100px)]'
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
                    }}
                    >
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                            Build your new <span className='text-blue-400'>Saas</span> Project
                        </h1>
                        <br />
                        <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Post Job & Hire Expert
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div
                    className='mx-auto bg-center bg-cover h-[calc(100vh-100px)]'
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
                    }}
                    >
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                            Build your new <span className='text-blue-400'>Saas</span> Project
                        </h1>
                        <br />
                        <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Post Job & Hire Expert
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
