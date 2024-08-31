import Logo2 from '../../images/Globnet1.png';

const Part3 = () => {
    const navItems = ["Accueil", "À propos", "Contacts"];
    const contactInfo = {
        heading: "Contactez-nous",
        phone: "+01 23 45 67 89",
        email: "GN@mail.gg"
    };

    return (
        <footer className="flex h-[150px] bg-[#010101] items-center px-[100px] justify-between">
            <div className='w-[100px]'>
                <img src={Logo2} alt="LogoGN" />
            </div>
            <div>
                <ul className='text-white'>
                    {navItems.map(navItem => (
                        <li key={navItem}>{navItem}</li>
                    ))}
                </ul>
            </div>
            <div className='text-white'>
                <h2>{contactInfo.heading}</h2>
                <br />{contactInfo.phone}
                <br />{contactInfo.email}
            </div>
        </footer>
    );
};

export default Part3;
