import Contact from "../Components/Contact"
import CountdownTimer from "../Components/CountDownTimer"
import Curriculum from "../Components/Curriculum"
import Footer from "../Components/Footer"
import Gallery from "../Components/Gallery"
import HeroSection from "../Components/HeroSection"
import JoinUs from "../Components/JoinUs"
import MissionSection from "../Components/Mission"
import Navbar from "../Components/Navbar"
import PartnerRegistration from "../Components/PartnerRegistration"
import Team from "../Components/Team"


const Home = () => {
  return (
    <div className="bg-blue-500">
        <Navbar/>
        <HeroSection/>
        <CountdownTimer/>
        <MissionSection/>
        <Curriculum/>
        <Gallery/>
        <Team/>
        <JoinUs/>
        <PartnerRegistration/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home