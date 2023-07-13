import heroBackground from '../src/assets/images/hero-background.jpeg';
import {FiFacebook, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'

const Hero = () => {
    return (
        <section style={{backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full h-auto bg-white">
            <div className='py-[40%] w-full h-auto bg-black text-white text-center md:py-[40%] lg:py-[8%]' style={{opacity: '0.8'}}>
                <h1 className="text-[50px] pb-[20px] text-green-700 font-[cambria] md:text-[70px] lg:text-[80px]">Techuplift</h1>
                <p className=" mx-auto w-[95%] text-[arial] text-[18px] md:text-[30px] md:w-[80%] lg:w-[40%] text-[22px]">Technology has the power to bridge the gap between poverty and progress, unlocking opportunities, empowering individuals, and igniting a brighter future for all.</p>
                <h2 className="font-bold pt-[70px] pb-[30px] text-[25px]">CONNECT WITH US ON:</h2>
                
               <div className="w-[60%] h-[30px] mx-auto flex justify-between items-center md:w-[45%] lg:w-[20%]">
                    <a href="/"><FiFacebook color='white' className="text-[35px] md:text-[50px]" /></a>
                    <a href="/"><FiInstagram color='white' className="text-[35px] md:text-[50px]" /></a>
                    <a href="/"><FiTwitter color='white' className="text-[35px] md:text-[50px]" /></a>
                    <a href="/"><FiLinkedin color='white' className="text-[35px] md:text-[50px]" /></a>
               </div>

            </div>
        </section>
    );
}
 
export default Hero;