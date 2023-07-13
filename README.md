# Welcome

Welcome to the project of group 3 students from the code plateau bootcamp

## About

In this project we tried a way to mitigate poverty by providing a website free for everyone. You can check out this website for finanacial knowledge



{courses.map(course => (
                <div key={course.id} className="h-auto pb-[150px] bg-black text-white mx-auto rounded-[10px]">
                    <div>
                        <img src={course.img} alt="illustration" className="w-[300px]" />
                        <h2 className="text-[35px]">{course.title}</h2>
                        <p>{course.content}</p>
                    </div>
                </div>