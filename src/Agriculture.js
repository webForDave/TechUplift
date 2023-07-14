import agricultureImage from '../src/assets/images/agriculture.jpg';

const Agriclture = () => {
    return (
        <section className="px-[5%] h-auto py-[30px] w-full"> 
            <div className="w-[100%] h-[700px] mx-auto" style={{backgroundImage: `url(${agricultureImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className='w-full h-[700px] bg-black text-white text-center' style={{opacity: '0.5'}}></div>
            </div>

            <div className='w-[100%] h-auto mx-auto my-[60px] pb-[20px] text-black'>
                <h2 className='text-[70px] text-center font-[cambria]'>Agriculture</h2>
                <p className='text-black text-[20px] font-[cambria]'><span className="font-extrabold text-[35px]">T</span>echnology and agriculture have the potential to significantly mitigate poverty by improving productivity, increasing income opportunities, and enhancing access to resources and markets. Through the integration of innovative technologies, farmers can overcome traditional challenges and transform their livelihoods. Here's a brief overview of how these two sectors can work together to alleviate poverty. Firstly, technological advancements in agriculture can enhance productivity by optimizing resource utilization and reducing production costs. Precision farming techniques such as remote sensing, drones, and satellite imagery enable farmers to monitor crop health, soil conditions, and irrigation requirements, leading to more efficient use of water and fertilizers. Access to affordable and renewable energy solutions can power irrigation systems and post-harvest processing, increasing agricultural yields. Moreover, the adoption of mechanization and automated tools can reduce labor-intensive processes, saving time and increasing productivity.</p>
                <p className='text-black text-[20px] font-[cambria] py-[10px]'>Secondly, technology can provide farmers with improved access to information and knowledge. Mobile applications and online platforms offer real-time weather forecasts, market prices, and expert advice, enabling farmers to make informed decisions. This access to information empowers them to select suitable crops, implement sustainable farming practices, and market their produce at competitive prices</p>
                <p className='text-black text-[20px] font-[cambria] py-[10px]'>Thirdly, technological innovations can create new income opportunities in rural areas. For instance, value-added processing technologies can help farmers convert their raw produce into higher-value products such as juices, jams, or snacks, leading to increased profitability. Aquaponics, hydroponics, and vertical farming enable cultivation in limited spaces, providing opportunities for urban and peri-urban farmers. Moreover, the rise of agricultural technology startups and incubators encourages entrepreneurship in the sector, leading to job creation and economic growth.</p>
            </div>

        </section>
    );
}
 
export default Agriclture;