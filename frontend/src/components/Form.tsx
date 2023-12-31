import { useState, FormEvent } from 'react';
import CopyButton from './CopyButton';
import ScaleLoader from "react-spinners/ScaleLoader";

interface FormData {
    url: string;
}

interface ShortUrlState {
    value: boolean;
    url: string;
}

const Form = () => {
    const [formdata, setFormData] = useState<FormData>({ url: '' });
    const [error, setError] = useState<string>('');
    const [shorturl, setShortUrl] = useState<ShortUrlState>({ value: false, url: '' });
    let [loading, setLoading] = useState(false);
    const api_home:string = process.env.REACT_APP_HOME_API ?? ''

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setFormData({ url })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const token: string | null = localStorage.getItem('authtoken');
        fetch(api_home, {
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
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col my-12'>

                    <span className="bg-red-100 text-red-700 p-2 rounded-md text-center max-w-[25rem]
                    sm:max-w-[18rem]
                       m-auto text-sm ">
                        Please note that the URL is longer because it uses a free domain provided by render.com
                    </span>

                    <label className='text-center text-white my-4 italic ' >Paste your URL here</label>
                    {error.length > 0 && <p className='text-center text-red-500'>{error}</p>}
                    <input type="text"
                        name="urlform"
                        value={formdata.url}
                        onChange={handleInputChange}
                        placeholder="URL"
                        className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500  w-[25rem]
                        sm:max-w-[18rem] mx-auto justify-left"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 justify-center w-[25rem]
                        sm:max-w-[18rem] mx-auto my-4 rounded"
                    >
                        Submit
                    </button>

                </div>
            </form>

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


            {!loading && shorturl.url && <CopyButton urlname={shorturl.url} />}

        </div>
    );
}

export default Form;

