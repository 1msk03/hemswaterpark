import Link from 'next/link'
import React from 'react'

const RefundPlocy = () => {
  return (
    <div className='lg:mx-20 mx-0'>
        <div className='container mx-auto'>
            <div className='bg-white shadow-lg rounded-md my-10 p-4'>
            <h3 className='lg:text-[30px] text-[20px] font-bold pb-5'>Refund and Cancellation Policy - Hems Water Park</h3>
            <p className='lg:text-[15px] text-[14px] leading-6'>Thank you for choosing Hems Water Park. Please review our refund and cancellation policy carefully before making any bookings. If you have any questions or concerns, feel free to contact us at <Link href="tel:9352318221" className='text-blue-500'>+91-9352318221</Link>.</p>
            <p className='lg:text-[15px] text-[14px] leading-6 pt-5'><span className='font-medium'>Ticket Bookings:</span> Tickets booked through the Hems Water Park ticket window cannot be cancelled, and the amount will not be refunded. Exceptions may apply in cases where the park is unable to open on your reserved date or if government health restrictions prevent us from hosting group bookings of your size.</p>
            <div className='py-5 flex flex-col gap-1'>
                <h5 className='text-[17px] font-medium'>Event Bookings:</h5>
                <ul className='list-disc pl-5'>
                    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Individual Booking: </span>A full deposit for the stay will be charged for confirmed bookings.</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Cancellation: </span>{`Cancellations can be made on any working day between 10:00 Hours to 18:00 hours from Monday to Saturday (except National Holidays). Booking can be cancelled or amended before 7 days from the date of booking. However, no cancellation, refund, or amendment is allowed during blackout dates.`}</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Amendments: </span>{`Amendments can be made before 7 days, and the difference charges will be applied as per the actual rates.
`}</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Refund Policy: </span>{`Refunds of advance payments will be made within 30 days of cancellation as per the cancellation policy.`}</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Confirmation Policy: </span>{`Bookings will be treated as confirmed only against 100% payment. No cancellation, refund, or amendment is allowed during blackout periods such as Diwali Period and New Year Period.`}</li>
                </ul>
            </div> 
            <div className='pb-5 flex flex-col gap-1'>
                <h5 className='text-[17px] font-medium'>Additional Notes:</h5>
                <ul className='list-disc pl-5'>
               <li className='lg:text-[15px] text-[14px] leading-6'>{`Deposited money will not be refunded in case of reservation cancellation or date change due to guests' change of mind.`}</li>
               <li className='lg:text-[15px] text-[14px] leading-6'>Group bookings should be made at least 3 days in advance to monitor current conditions and restrictions.</li>
               <li className='lg:text-[15px] text-[14px] leading-6'>School/holiday groups are required to make prior reservations to confirm the booking and allow necessary arrangements for the students.</li>
                </ul>
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default RefundPlocy
