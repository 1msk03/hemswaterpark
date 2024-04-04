import Image from 'next/image'
import React from 'react'
import Gallary1 from '../../public/gallary1.jpg'
import Link from 'next/link'
const InformationPage = () => {
  return (
    <div>
     <div className='container mx-auto'>
        <h3 className='md:text-[40px] text-[22px] font-bold text-primary tracking-wide py-7 '>{`About us – Information`}</h3>
     <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
        <div className='lg:w-[50%] w-full '>
         <p className='text-[15px] text-justify leading-7'>{`Located in the vibrant city of Jaipur, Hems Water Park isn't just a water park—it's the ultimate vacation destination and holiday spot for families and thrill-seekers. Recognized as Jaipur’s top terrace rain dance venue, we offer a wide range of exciting activities for an unforgettable day out. Guests can dive into our exhilarating Wave Pool or enjoy the thrill of our unique slides, suitable for both kids and adults. Families can bond over our Family Slides and Kids Slides, ensuring a day filled with fun and laughter. Prioritizing safety and convenience, we offer complimentary costumes, secure locker facilities, free parking, and CCTV security for a hassle-free experience. After an action-packed day, guests can recharge at our food court, which offers a variety of delicious food options to satisfy every palate.`}</p>
        </div>
        <div className='lg:w-[50%] w-full '>
            <Image src={Gallary1} alt='' className='w-full h-full object-contain'/>
        </div>
     </div>
     <div className='flex flex-col lg:flex-row justify-center items-center gap-10 py-20'>
     <div className='lg:w-[50%] w-full '>
            <Image src={Gallary1} alt='' className='w-full h-full object-contain'/>
        </div>
        <div className='lg:w-[50%] w-full '>
         <p className='text-[15px] text-justify leading-7'>{`At Hems Water Park, we believe in creating unforgettable memories. That's why we host a variety of events to cater to all your special occasions. Whether it's a school picnic, a festival celebration, a birthday party, a corporate event, a kitty party, or an anniversary, our venue offers the perfect setting for any event. Our comprehensive services and amenities make us the go-to destination for family outings and social gatherings. `}</p>
        </div>
       
     </div>
     <div className='bg-white rounded-[40px] p-5 mb-20'>
        <ul className=' flex flex-col gap-3 justify-center items-center'>
            
            <li><p className='text-[15px] tracking-wide'>{`For more information or to book your visit, contact us at`} <Link href="tel:9352318221" className='font-bold text-primary'>9352318221</Link>.</p></li>
            <li><p className='text-[15px] tracking-wide'> <span className='font-bold text-primary'>Location</span> {`-Near Dugout Turf Arena, behind Chordias Atulya in Keshupura, Bhakrota, Jaipur, Rajasthan.`}
</p></li>
<li><p className='text-[15px] tracking-wide'>
{`Come and experience the joy and excitement that Hems Water Park has to offer, and easily accessible for all !`}

</p></li>
        </ul>
     </div>
     </div>
    </div>
  )
}

export default InformationPage
