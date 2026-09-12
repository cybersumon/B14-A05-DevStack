import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="sticky top-0 w-full border-b border-gray-100 bg-white ">
            <div className="flex mx-auto min-h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <img src={Logo} alt="" />

                <ul className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
                    <li>
                        <a className="text-pink-500 transition hover:text-pink-500 font-semibold" href="#"> Home </a>
                    </li>
                    <li>
                        <a className="text-pink-500 transition hover:text-pink-500 font-semibold" href="#"> Technologies </a>
                    </li>
                    <li>
                        <a className="text-pink-500 transition hover:text-pink-500 font-semibold" href="#"> Projects </a>
                    </li>
                    <li>
                        <a className="text-pink-500 transition hover:text-pink-500 font-semibold" href="#"> About</a>
                    </li>
                    <li>
                        <a className="text-pink-500 transition hover:text-pink-500 font-semibold " href="#">Contact</a>
                    </li>


                </ul>
                <div className="flex items-center gap-3">
                    <button className="hidden text-sm text-gray-700 transitiopn hover:text-pink-500 sm:block">
                        Sign in
                    </button>

                    <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">

                        Sign up
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Nav;