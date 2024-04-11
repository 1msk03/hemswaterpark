"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewsData = [
  {

    title: 'Rohan S.',
    des: `Absolutely loved the water park! It's clean, well-maintained, and offers a variety of fun rides. A perfect day out for families!`,
    img: ''
  },
  {

    title: 'Priya M.',
    des: `The slides were thrilling, the staff was friendly, and the overall atmosphere was fantastic. Highly recommend!`,
    img: ''
  },
  {

    title: 'Amit J.',
    des: `A great place to beat the heat! The facilities are top-notch, and the food options are delicious. Can't wait to visit again!`,
    img: ''
  },
  {

    title: 'Anjali K.',
    des: `Safety measures are well in place. I felt comfortable letting my kids roam around. Kudos to the management!`,
    img: ''
  },
  {

    title: 'Nikhil P.',
    des: `The changing rooms were clean, and the lockers were spacious. Everything you need for a comfortable day at the water park.`,
    img: ''
  },
  {

    title: 'Ritu L',
    des: `Reasonably priced and worth every penny! The wave pool was my favorite. Will definitely be coming back soon.`,
    img: ''
  },
]

const Reviews = () => {
  const settings = {
    infinite: true, // Set to true for infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className='bg-white py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[16px] font-medium tracking-wide uppercase text-heading'>OUR REVIEWS</p>
            <h3 className='lg:text-[50px] text-[32px] text-center font-bold capitalize tracking-wide text-primary'>Guests Love Us</h3>
        </div>
        
        <div  className={` w-full mt-10  `}>
        <Slider {...settings} className="gap-5">
    {
      reviewsData.map((item, index)=>{
        return    <div className="flex justify-center items-center gap-6" key={`${index}`}>
            <div className="card">
        <div className="header">
          <div className="image" >
          <Image src={'/avtar.png'} width={70} height={70} alt="" className=" rounded-full object-contain"/>
          </div>
          <div>
          <p className="name">{item.title}</p>
            <div className="stars">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          
          </div>
        </div>
        <p className="message">
          {item.des}
        </p>
      </div>
        </div>
      })
    }
</Slider>
        </div>
      </div>
    </div>
  )
}

export default Reviews
