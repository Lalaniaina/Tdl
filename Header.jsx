import LogoGN from '../../images/LogoGN.gif';

const Part1 = () => {
    const navItems = ["Accueil", "À propos", "Contacts"];
    const buttonLabel = "Login";

    return (
        <header className="flex items-center px-[50px] justify-between">
            <div className='w-[120px]'>
                <img src={LogoGN} alt="LogoGN" />
            </div>
            <nav>
                <ul className="flex space-x-5">
                  {navItems.map(navItem => (
                        <li key={navItem}>{navItem}</li>
                    ))} 
                </ul>
            </nav>
            <div>
                <button className='text-white bg-blue-400 px-3 py-1 rounded-md hover:bg-blue-500'>
                    {buttonLabel}
                </button>
            </div>
        </header>
    );
};

export default Part1;
