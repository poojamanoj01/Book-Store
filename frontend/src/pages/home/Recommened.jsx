import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommened = () => {


    const { data: books = [] } = useFetchAllBooksQuery();
    return (
        <div className='py-16'>
            <h2
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                }}
                className="mb-8 font-serif relative"
            >

                Recommended for you               
                  <span
                    style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '5%',
                        width: '30%', // For half underline
                        height: '2px',

                        backgroundColor: '#7fffd4', // Blue color for the underline
                    }}
                    className='mt-8'
                ></span>
            </h2>


            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </div>
    )
}

export default Recommened