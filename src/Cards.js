import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from 'react';
import education  from '../src/assets/images/education.jpeg';
import agriculture from '../src/assets/images/agriculture.jpg';
import job from '../src/assets/images/job.jpeg';

const Cards = () => {

    let [courses, setCourse] = useState([
        {title: 'Education', content: 'We provide free education resources for people with little or no educational background', id: 1, img: education , link: 'education'},
        {title: 'Agriculture', content: 'We help farmes around the world come up with world class solutions to problems by giving them resources to lesrn mechanized farming', id: 2, img: agriculture, link: 'agriculture'},
        {title: 'Job Search', content: 'Our Job search serction provides top-notch job-openings for world class individuals looking up to a job', id: 3, img: job, link: 'fuzu'}
    ]);

    return (
        <section className="w-full h-auto bg-white py-[50px]">

            <h1 className="text-black text-[50px] text-center font-[cursive]">What we offer</h1>

            <div className="w-[100%] h-[600px] px-[30px] mx-auto flex justify-between items-center text-black">
                {courses.map(course => (
                    <div className="w-[30%]">
                        <Link to = {course.link}>
                            <img src={course.img} alt="illustration" className="w-[300px] mx-auto rounded-[10px]" />
                            <h2 className="text-[35px] font-[cambria] text-center font-extrabold py-[15px]">{course.title}</h2>
                            <p className="text-[25px] w-[auto] text-center font-[cambria]">{course.content}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Cards;