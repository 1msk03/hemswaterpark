import PrivacyPolicy from "@/components/privacy"




export default function Page(){
    return (
        <>
      <PrivacyPolicy/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: `Hems Water Park Privacy Policy`,
        description:
          `Explore our comprehensive privacy policy to safeguard your information at Hems Water Park. Enjoy peace of mind during your visit!`,
          
    }
  }