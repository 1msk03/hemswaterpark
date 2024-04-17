import BlogPage from "@/components/blog";
import Blog from "@/components/home/Blog";



export default function Page(){
    return (
        <>
      <BlogPage/>
      <Blog/>
        </>
    )
}
export function generateMetadata(){
  return {
      title: "Discover Jaipur's Most Affordable Water Park - Ticket, Schedule, etc.",
      description:
        `Dive into endless fun at Jaipur's most beautiful and affordable water park. Enjoy unique attractions and delicious food options at unbeatable prices`,
        
  }
}