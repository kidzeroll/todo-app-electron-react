import DarkSwitcher from "./DarkSwitcher";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-700 shadow-sm backdrop-blur-sm bg-white/70 dark:bg-[#0e1526]/70">
            <div className="flex items-start justify-between max-w-6xl mx-auto">
                <div className="flex flex-row items-center p-2.5 my-auto">
                    <h1 className="text-lg font-bold cursor-pointer hover:text-indigo-500">
                        Muhammad Haykal
                    </h1>
                </div>

                <nav className="flex flex-row items-center p-2.5 my-auto">
                    <DarkSwitcher />
                </nav>
            </div>
            <div id="header-bar" className="border-b-[2px] border-indigo-500 w-0" />
        </header>
    );
};

export default Header;
