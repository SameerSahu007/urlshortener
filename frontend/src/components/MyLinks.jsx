import { useState, useEffect } from 'react';

const MyLinks = () => {
    const [userlinks, setUserLinks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('authtoken');
        fetch('http://localhost:8000/mylinks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setUserLinks(data)
            })
            .catch(error => console.error('Error:', error));
    }, [])
    return (<>

        {!userlinks.length ? <h2 className='text-center my-4'>There are no links created yet or you're not logged in right now.</h2> : <h2 className='text-center my-4'>Here are your links: </h2>}
        
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Encoded String
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        URL
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {userlinks.length > 0 && userlinks.map((object, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{object.encodedString}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{object.url}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    </>);
}

export default MyLinks;