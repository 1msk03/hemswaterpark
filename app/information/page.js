import InformationPage from "@/components/information";

export default function Page(){
    return(
        <>
        <InformationPage/>
        </>
    )
}

export function generateMetadata(){
    return {
        title: "About Us - Hems Water Park Jaipur: Ultimate Family Vacation Spot",
        description:
          `Discover Hems Water Park in Jaipur! Your ultimate destination for family outings and events. Enjoy exciting slides, terrace rain dance, and delicious food. We prioritize safety with free parking, CCTV, and more`,
          
    }
  }