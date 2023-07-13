import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import {HiMenuAlt1} from 'react-icons/hi';
import {TfiClose} from 'react-icons/tfi';

const Navbar = () => {

    let [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-auto bg-white px-[3px] py-[20px] font-extrabold  md:flex justify-between items-center md:px-[50px] lg:px-[70px] lg:py-[10px]">
            <Link to="/"><h1 className="text-[35px] font-[cursive] lg:text-[35px]">Techuplift</h1></Link>

            <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-8 cursor-pointer md:hidden">

                {
                    isOpen ? <TfiClose size={30}/> : <HiMenuAlt1 size={30}/>
                }

            </div>

            <ul className={`text-[20px] py-[20px] font-bold md:flex justify-between lg:py-[0]`}>
                <li className="px-[10px]"><Link to="/">Home</Link></li>
                <li className="px-[10px]"><Link to="/resources">Resources</Link></li>
                <li className="px-[10px]"><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;