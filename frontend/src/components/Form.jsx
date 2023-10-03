import { useState } from 'react';
import CopyButton from './CopyButton.jsx';

const Form = () => {
    const [formdata, setFormData] = useState({ url: '' });
    const [error, setError] = useState('')
    const [shorturl, setShortUrl] = useState({ value: false, url: '' })
    const api_home = process.env.API_HOME

    const handleInputChange = (e) => {
        const url = e.target.value;
        setFormData({ url })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('authtoken');
        fetch('https://urlshortener-service-vfuq.onrender.com/home', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setShortUrl(prevState => {
                        return { ...prevState, url: data.message, value: true }
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col my-12'>
                    <span className="bg-red-100 text-red-700 p-2 rounded-md text-center lg:mx-36 md:mx-5 my-4">
                    Please note that the URL is longer because it uses a free domain provided by render.com
                    </span>
                    <label className='text-center text-blue-500' >Paste your URL here</label>
                    {error.length > 0 && <p className='text-center text-red-500'>{error}</p>}
                    <input type="text"
                        name="urlform"
                        value={formdata.name}
                        onChange={handleInputChange}
                        placeholder="URL"
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
            {shorturl.url && <CopyButton urlname={shorturl.url} />}

        </div>
    );
}

export default Form;

