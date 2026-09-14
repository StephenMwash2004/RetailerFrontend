import { useState } from "react";


function Register(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value,
        });
    };
    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        
        fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
        
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={ handleChange } required />
                <input type="text" name="email" value={email} onChange={handleChange} required />
                <input type="password" name="password" value={password} onChange={handleChange} required/>

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
}
export default Register;