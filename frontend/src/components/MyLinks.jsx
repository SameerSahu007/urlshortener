import { useEffect } from 'react';

const MyLinks = () => {

    useEffect(() => {
        const token = localStorage.getItem('authtoken');
        fetch('http://localhost:8000/secret', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                response.json()
            })
            .then(data => {
                console.log('Response from backend:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (<>
        <h1>This is my links</h1>
    </>);
}

export default MyLinks;