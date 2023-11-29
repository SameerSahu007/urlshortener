import { Link } from "react-router-dom";

const Navbar = () => {
    const refresh = () =>{
        localStorage.removeItem('authtoken')
        window.location.reload()
    } 
    return (
        <>
            <nav className="flex font-bold  bg-[#0d1112] py-4 px-8 items-center justify-end">
                <div className=" text-[#A2D2FF]  border-spacing-3 text-center
            lg:text-4xl md:text-3xl  mx-auto sm:w-11/12 md:w-11/12 lg:w-10/12 rounded">
                    This is ZipLink, a URL shortener.🚀
                </div>


                {!localStorage.getItem('authtoken') ?
                    <div className="lg:pl-10">
                        <button className="bg-[#A2D2FF] hover:bg-white text-black font-bold py-2 px-5 rounded mb-2">
                            <Link to='/login'>
                                Login
                            </Link>
                        </button>

                        <button className="bg-[#A2D2FF] hover:bg-white
                                 text-black font-bold py-2 px-4 rounded">
                            <Link to='/signup'>
                                SignUp
                            </Link>
                        </button>
                    </div>
                    :
                    <button className="bg-[#A2D2FF] hover:bg-white
                    text-black font-bold py-2 px-4 rounded" onClick={refresh}>
                        logout
                    </button>
                }


            </nav>
            <div className="text-right back my-3 mx-2">
                <Link to='/' className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-full hover:bg-blue-700">
                    Home
                </Link>
                <Link to='/mylinks' className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700">
                    MyLinks
                </Link>
            </div>

        </>
    );
}

export default Navbar;