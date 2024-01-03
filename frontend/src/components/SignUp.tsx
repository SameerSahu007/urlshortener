import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

interface UserInfo {
    email: string,
    password: string,
    passwordagain: string
}

const SignUp = () => {
    const [formdata, setFormData] = useState<UserInfo>({ email: '', password: '', passwordagain: '' })
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    let [loading, setLoading] = useState(false);
    const sign_up_api = process.env.REACT_APP_SIGNUP_API ?? ''

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    }

    useEffect(() => {
        if (localStorage.getItem('authtoken')) {
            navigate('/')
        }
    }, [])
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        fetch(sign_up_api, {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("authtoken", data.token);
                    window.location.reload();
                }
                else if (data.error) {
                    setError(data.error)
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                {error.length > 0 && <p className='text-center text-red-500'>{error}</p>}
                <div className='flex flex-col my-12'>
                    <label className='text-center text-blue-500' >Email</label>
                    <input type="text"
                        name="email"
                        value={formdata.email}
                        onChange={handleInputChange}
                        placeholder="email"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-[20.5rem]
                        sm:max-w-[18rem] mx-auto justify-left"
                    />
                    <label className='text-center text-blue-500'>Password</label>
                    <input type="password"
                        name="password"
                        value={formdata.password}
                        onChange={handleInputChange}
                        placeholder="password"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-[20.5rem]
                        sm:max-w-[18rem] mx-auto justify-left"
                    />

                    <label className='text-center text-blue-500'>Password(Again)</label>
                    <input type="password"
                        name="passwordagain"
                        value={formdata.passwordagain}
                        onChange={handleInputChange}
                        placeholder="password"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-[20.5rem]
                        sm:max-w-[18rem] mx-auto justify-left"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 justify-center w-[20.5rem] sm:max-w-[18rem]
                        m-auto my-4 rounded"
                    >
                        Submit
                    </button>

                    <div className='max-w-[25rem] sm:max-w-[18rem] m-auto flex justify-center '>
                        <ScaleLoader
                            color="#A2D2FF"
                            height={40}
                            loading={loading}
                            margin={1}
                            radius={-2}
                            width={6}
                        />
                    </div>

                </div>
            </form>



        </>
    );
}

export default SignUp;