import EventsSection from "@/components/events";
import EventsSection1 from "@/components/events/EventsSection";

export default function Page(){
    return(
        <>
        <EventsSection/>
        <EventsSection1/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: `Catch the best offers at" Hems Water Park Jaipur's for Events!`,
        description:
          `Explore exciting events at Hems Water Park such as birthdays, kitty parties, corporate gatherings, and school picnics. Enjoy special vacation discounts: 25% off for friends, 20% off for families, and 10% off for couples. Dive into savings and unforgettable experiences!`,
          
    }
  }