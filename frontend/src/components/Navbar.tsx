import { Link } from "react-router-dom";

const Navbar = () => {
    const refresh = () => {
        localStorage.removeItem('authtoken')
        window.location.reload()
    }
    return (
        <>
            <nav className="flex font-bold  bg-transparent py-4 px-8 items-center justify-end mb-2">

                <div className="text-[#A2D2FF]  text-3xl border-spacing-3 text-center
              mx-auto lg:w-11/12 md:w-11/12 sm:w-10/12 rounded">
                    This is ZipLink, a URL shortener.🚀
                </div>

            </nav>

            <span className=" flex justify-center items-center">
                {!localStorage.getItem('authtoken') ?
                    <div>
                        <button className="bg-[#A2D2FF] hover:bg-white text-black font-bold py-2 px-6 rounded mr-2 sm:text-sm sm:px-3 sm:py-1">
                            <Link to='/login'>
                                Login
                            </Link>
                        </button>

                        <button className="bg-[#A2D2FF] hover:bg-white
                                 text-black font-bold py-2 px-5 rounded mr-2 sm:text-sm sm:px-3 sm:py-1">
                            <Link to='/signup'>
                                SignUp
                            </Link>
                        </button>
                    </div>
                    :
                    <button className="bg-[#A2D2FF] hover:bg-white
                    text-black font-bold py-2 px-4 rounded mr-2 sm:text-sm sm:px-3 sm:py-1" onClick={refresh}>
                        logout
                    </button>
                }
                <Link to='/' className="bg-[#A2D2FF] hover:bg-white text-black font-bold py-2 px-5 rounded mr-2 sm:text-sm sm:px-3 sm:py-1">
                    Home
                </Link>
                <Link to='/mylinks' className="bg-[#A2D2FF] hover:bg-white text-black font-bold py-2 px-5 rounded sm:text-sm sm:px-3 sm:py-1">
                    MyLinks
                </Link>
            </span>
        </>
    );
}

export default Navbar;