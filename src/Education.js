import eduactionImage from '../src/assets/images/education.jpeg';
import ReactPlayer from 'react-player';

const Education = () => {

    return (
        <section className="px-[5%] h-auto py-[30px] w-full"> 
            <div className="w-[100%] h-[700px] mx-auto" style={{backgroundImage: `url(${eduactionImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className='w-full h-[700px] bg-black text-white text-center' style={{opacity: '0.5'}}></div>
            </div>

            <div className='w-[100%] h-auto mx-auto my-[60px] pb-[20px] text-black'>
                <h2 className='text-[70px] text-center font-[cambria]'>Education</h2>
                <p className='text-black text-[20px] font-[cambria]'><span className="font-extrabold text-[35px]">T</span>echnology and education have the potential to significantly mitigate poverty by improving access to quality education, fostering skill development, and promoting economic empowerment. Here's a brief overview of how technology and education can work together to alleviate poverty. Firstly, technology can bridge the educational divide by expanding access to quality education. Online learning platforms, digital resources, and educational apps offer opportunities for individuals in remote or underserved areas to access educational materials and engage in interactive learning experiences. This access to education empowers individuals to acquire knowledge, develop skills, and enhance their employability, regardless of their geographical location or socioeconomic background.</p>
                <p className='text-black text-[20px] font-[cambria] py-[10px]'>Secondly, technology can enhance the effectiveness of teaching and learning processes. Interactive multimedia tools, virtual reality, and augmented reality applications can create immersive learning experiences that captivate students' attention and improve information retention. Additionally, adaptive learning systems and intelligent tutoring software personalize the learning experience, catering to individual needs and learning styles. This individualized approach helps students overcome learning barriers, develop critical thinking skills, and acquire the knowledge necessary to break the cycle of poverty.</p>
                <p className='text-black text-[20px] font-[cambria] py-[10px]'>Technology enables lifelong learning and skill development. Online courses, webinars, and educational platforms provide opportunities for individuals to acquire new skills, upgrade existing knowledge, and stay relevant in a rapidly changing job market. This continuous learning approach allows individuals to adapt to emerging industries, secure better job opportunities, and increase their earning potential, ultimately improving their socioeconomic status.</p>
            </div>

            <h2 className="font-extrabold text-[40px] font-[cambria] text-center py-[15px]">Video References</h2>

            <div className='w-full h-auto grid grid-cols-3 gap-20'>
                <div className='w-auto h-auto  cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                     <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/tGC9616rQD4' width={'100%'} /></div>
                     <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>English</h2>
                </div>

                <div className='w-auto h-auto cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                    <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/grnP3mduZkM'  width={'100%'}/></div>
                    <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>Mathematics</h2>

                </div>

                <div className='w-auto h-auto  cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                    <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/HIW8zZDIrPg'  width={'100%'}/></div>
                    <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>General Knowledge</h2>
                </div>

                <div className='w-auto h-auto  cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                    <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/PfEd9pqSWLo'  width={'100%'}/></div>
                    <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>Civic Education</h2>
                </div>

                <div className='w-auto h-auto  cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                    <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/_luU3I03JwE'  width={'100%'}/></div>
                    <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>Health Studies</h2>
                </div>

                <div className='w-auto h-auto  cursor-pointer rounded-[25px] border-[2px] border-solid border-black'>
                    <div className='w-full h-[70%]'><ReactPlayer controls url='https://youtu.be/ZcHh8GrZUIc'  width={'100%'}/></div>
                    <h2 className='text-[30px] font-[cambria] py-[5px] text-center'>Social Studies</h2>
                </div>

            </div>

        </section>
    );
}
 
export default Education;