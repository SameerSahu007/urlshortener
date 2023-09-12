import {useState} from 'react';
const Form = () => {
    const [formdata, setFormData] = useState({
        url: '',
    });

    const handleInputChange = (e)=> {
        const url = e.target.value;
        setFormData({url})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
    }
        
 return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your URL</label>
            <input type="text" 
            name = "urlform"
            value = {formdata.name}
            onChange = {handleInputChange}
            className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </form>
    </div>
    );
}

export default Form;

