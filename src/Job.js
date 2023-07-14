import jobImage from '../src/assets/images/job.jpeg';

const Job = () => {
    return (
        <section className="px-[5%] h-auto py-[30px] w-full"> 
            <div className="w-[100%] h-[700px] mx-auto" style={{backgroundImage: `url(${jobImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className='w-full h-[700px] bg-black text-white text-center' style={{opacity: '0.5'}}></div>
            </div>

            <div className='w-[100%] h-auto mx-auto my-[60px] pb-[20px] text-black'>
                <h2 className='text-[70px] text-center font-[cambria]'>Search for Jobs</h2>
                <p className='text-black text-[20px] font-[cambria]'><span className="font-extrabold text-[35px]">T</span>echnology and job creation play crucial roles in mitigating poverty by providing opportunities for economic growth, skill development, and increased access to employment. Here's a brief discussion on how technology and job creation can work together to alleviate poverty.Firstly, technology has the potential to create new jobs and transform existing industries. As technological advancements continue to reshape the economy, new sectors and job opportunities emerge. Fields such as information technology, data analysis, artificial intelligence, and renewable energy offer avenues for employment and economic growth. By fostering technological innovation and supporting entrepreneurship, governments and organizations can stimulate job creation in these emerging industries, particularly in developing regions where the digital divide can be bridged.</p>
                <p className='text-black text-[20px] font-[cambria] py-[10px]'>Furthermore, technology-enabled job platforms and digital marketplaces connect job seekers with employment opportunities, particularly in the informal sector. Mobile applications and online platforms facilitate gig work, freelancing, and micro-entrepreneurship, providing individuals with flexible income-generation options. This digital inclusion enables individuals to access a wider range of job opportunities, breaking the cycle of poverty by offering a pathway to economic independence.Moreover, technology-driven automation and productivity enhancements can optimize industries, leading to increased efficiency and competitiveness. While automation may displace certain jobs, it also creates opportunities for upskilling and reskilling. Governments and organizations can implement policies and programs that ensure workers are equipped with the necessary skills to adapt to changing job requirements. This proactive approach allows individuals to transition into higher-skilled positions and access higher-paying jobs, ultimately lifting them out of poverty. </p>
            </div>

        </section>
    );
}
 
export default Job;