
import BookingPage from "@/components/booking";
import Terms from "@/components/booking/Terms";
import Gallary from "@/components/home/Gallary";
import Holiday from "@/components/service/Holiday";


export default function Page(){
    return (
        <>
        <BookingPage/>
        <Holiday/>
        <Terms/>
  
   
     {/* <Gallary/> */}
    
      
        </>
    )
}
export function generateMetadata(){
    return {
        title: `Book Hems Water Park Tickets Online: or you can call us on- 9352318221!`,
        description:
          `Secure your Hems Water Park tickets at affordable prices by contacting us directly for bookings. Enjoy your vacations with exciting activities with "Hems Water Park Jaipur`,
          
    }
  }