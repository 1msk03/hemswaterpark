import Faq from "@/components/faq";

export default function Page(){
    return(
        <>
        <Faq/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "Explore Hems Water Park FAQs | All Your Questions Answered!",
        description:
          ` Discover all about Hems Water Park FAQs - Get answers to commonly asked questions about our attractions, tickets, timings, and more!`,
          
    }
  }