import agricultureImage from '../src/assets/images/agriculture.jpg';

const Agriclture = () => {
    return (
        <section className="px-[5%] h-auto py-[30px] w-full"> 
            <div className="w-[100%] h-[700px] mx-auto" style={{backgroundImage: `url(${agricultureImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className='w-full h-[700px] bg-black text-white text-center' style={{opacity: '0.5'}}></div>
            </div>

            <div className='w-[100%] h-auto mx-auto my-[60px] pb-[20px] text-black'>
                <h2 className='text-[70px] text-center font-[cambria]'>Agriculture</h2>
                <p className='text-black text-[20px] font-[cambria]'><span className="font-extrabold text-[35px]">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque nisi, tempore autem quis qui temporibus hic sed repudiandae natus porro vero earum eos, nesciunt nemo? Totam mollitia numquam adipisci suscipit non quod odit saepe nemo ipsam id, assumenda doloribus laudantium, voluptates, possimus quas quae quia in sequi earum natus veniam laboriosam. Magnam, adipisci omnis. Autem, aut! Hic blanditiis eligendi mollitia veniam eaque assumenda similique eius asperiores dolores. Consectetur veniam fuga mollitia animi obcaecati. Ipsam nemo quis expedita, consequatur enim officia necessitatibus vero, quas fugiat libero pariatur commodi. Corporis fuga veritatis, aut neque rem impedit molestias, tenetur maiores quisquam consequuntur ipsa accusantium tempora quis. Blanditiis veritatis dolorum, architecto, voluptates nobis quaerat alias atque accusamus aut sunt enim eveniet facere rem consequatur quo harum ipsam provident rerum non animi.</p>
            </div>

        </section>
    );
}
 
export default Agriclture;