import { useState } from 'react';
const SignUp = () => {
    const [formdata, setFormData] = useState({ email: '', password: '' , passwordagain:''})
    const [errors, setEroor] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        fetch('http://localhost:8000/signup', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("authtoken", data.token);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col my-12'>
                    <label className='text-center text-blue-500' >Email</label>
                    <input type="text"
                        name="email"
                        value={formdata.email}
                        onChange={handleInputChange}
                        placeholder="email"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-8/12 mx-auto justify-left"
                    />
                    <label className='text-center text-blue-500'>Password</label>
                    <input type="password"
                        name="password"
                        value={formdata.password}
                        onChange={handleInputChange}
                        placeholder="password"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-8/12 mx-auto justify-left"
                    />

                    <label className='text-center text-blue-500'>Password(Again)</label>
                    <input type="password"
                        name="passwordagain"
                        value={formdata.passwordagain}
                        onChange={handleInputChange}
                        placeholder="password"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-8/12 mx-auto justify-left"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 justify-center w-8/12 mx-auto my-4 rounded"
                    >
                        Submit
                    </button>

                </div>
            </form>

        </>
    );
}

export default SignUp;