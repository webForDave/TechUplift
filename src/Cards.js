import { useState } from 'react';
import one from '../src/assets/images/1.jpeg';
import two from '../src/assets/images/2.jpeg';
import three from '../src/assets/images/3.jpeg';

const Cards = () => {

    let [courses, setCourse] = useState([
        {title: 'Bacic Education', content: 'Lorem ipsum...', id: 1, img: one},
        {title: 'Advanced Education', content: 'Lorem Ipsum...', id: 2, img: two},
        {title: 'Job Search', content: 'Lorem Ipsum...', id: 3, img: three}
    ]);

    return (
        <section className="w-full h-auto bg-white py-[50px]">

            <h1 className="text-black text-[50px] text-center font-[cursive]">What we offer</h1>

            <div className="w-[70%] h-[600px] px-[30px] mx-auto flex justify-between items-center text-black">
                {courses.map(course => (
                    <div>
                        <img src={course.img} alt="illustration" className="w-[300px] rounded-[10px]" />
                        <h2 className="text-[35px] font-[cambria] text-center">{course.title}</h2>
                        <p className="text-[25px]">{course.content}</p>
                        <a href="/">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Cards;