const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <section className='w-full h-[70px] bg-white text-black border-[1px] border-solid border-black text-center py-[2%]'>
            <h2 className="text-[20px] font-[cursive] font-extrabold">TECHUPLIFT {date}</h2>
        </section>
    );
}
 
export default Footer;