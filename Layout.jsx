import poigne from '../../images/conclu.png';

const Part2 = () => {
    const textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Fuga a molestias architecto facilis maxime, maiores autem, 
        accusamus ab dolorum odio sunt ducimus, 
        rem necessitatibus eligendi deserunt similique quia officiis? 
        Dolorem praesentium, aut, porro cum id dignissimos, 
        quia velit temporibus recusandae dolores ea aperiam doloremque. 
        Sit nisi ut odit vitae sunt.`;

    const placeholderText = "Votre email";
    const buttonText = "Go";

    return (
        <section className='flex h-[450px] bg-blue-400 mt-2 items-center justify-center'>
            <img className="w-1/2" src={poigne} alt="conclu" />
            <div className="flex flex-col items-center w-1/2 mr-[50px]">
                <p className='bg-white p-3 mb-4 rounded-lg'>
                    {textContent}
                </p>
                <div className="flex items-center">
                    <input className="p-2 border rounded-l-lg" type="email" placeholder={placeholderText} />
                    <button className="p-2 bg-blue-500 text-white rounded-r-lg">{buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default Part2;
