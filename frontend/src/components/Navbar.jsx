import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex font-bold  bg-[#0d1112] py-4 px-8 items-center justify-end">
                <div className=" text-[#A2D2FF]  border-spacing-3 text-center
            lg:text-4xl md:text-3xl  mx-auto sm:w-11/12 md:w-11/12 lg:w-10/12 rounded">
                    This is ZipLink, a URL shortener.🚀
                </div>


                <div className="lg:pl-10">

                    <button className="bg-[#A2D2FF] hover:bg-white text-black font-bold py-2 px-5 rounded mb-2">
                        <Link to='/login'>
                            Login
                        </Link>
                    </button>

                    <Link to='/signup'>
                    <button className="bg-[#A2D2FF] hover:bg-white
                     text-black font-bold py-2 px-4 rounded">
                        SignUp
                    </button>
                    </Link>
                    
                </div>

            </nav>
        </>
    );
}

export default Navbar;