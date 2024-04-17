import ContactPage from "@/components/contact";
import Contact from "@/components/contact/Contact";
import Map from "@/components/contact/Map";



export default function Page(){
    return (
        <>
       <ContactPage/>
       <Contact/>
      <Map/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: `Get in Touch with Hems Water Park for Exciting Offers & Bookings! Call us now:- 9352318221`,
        description:
          `Contact Hems Water Park for details on upcoming offers and bookings. Dive into excitement with thrilling experiences and unbeatable  and reasonable deals. Call us for any further information.`,
          
    }
  }