import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description: "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: news1,
    color: 'bg-red-500', // Add a unique color for each card
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description: "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: news2,
    color: 'bg-green-500', // Unique color for the second card
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description: "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: news3,
    color: 'bg-blue-500', // Unique color for the third card
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description: "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: news4,
    color: 'bg-yellow-500', // Unique color for the fourth card
  },
];

const News = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);  // Track which card was clicked
  };

  return (
    <div className="py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <h2
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                }}
                className="mb-8 font-serif relative"
            >
               News
                <span
                    style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '5%',
                        width: '20%', // For half underline
                        height: '2px',

                        backgroundColor: '#7fffd4', // Blue color for the underline
                    }}
                    className='mt-8'
                ></span>
            </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20} 
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-8"
        style={{
          width: '80%', // Ensure swiper container is 80% width
          maxWidth: '1000px', 
          margin: '0 auto', 
        }}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleCardClick(index)}  // Set the active index when clicked
              className={` flex flex-col shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${
                activeIndex === index ? item.color : 'bg-black'  // Change color on click
              }`}
              style={{
                width: '100%', // Make each card take full width of swiper
                height: '400px', // Set fixed height for card
                margin: '0 auto',
                cursor: 'pointer', // Change cursor to indicate it's clickable
              }}
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1">
                <h3 className="text-md font-bold text-white hover:text-blue-500 mb-3">
                  <Link to="/" className="text-sm">{item.title}</Link>
                </h3>
                <p className="text-xs text-white mb-4">{item.description}</p>
                <Link
                  to="/"
                  className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
