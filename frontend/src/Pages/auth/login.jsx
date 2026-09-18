import { useState } from "react";

function Login(){
    
    const [formData,setFormData]= useState({
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

    const handleSubmit=( e )=>{

        e.preventDefault();

        fetch("http://localhost:5000/api/auth/register",{
            method:POST,
            headers:{
                "Content-type":"application/json",
            },
            Body: JSON.stringify(formData)
        })
        .then((response)=>response.json())
        .then((data)=> console.log(data))
        .catch((error) => console.error(error));
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="email" value={email} onChange={handleChange} required />
                <input type="text" name="password" value={password} onChange={handleChange} required />

                <button type="submit">Sign In</button>

            </form>
        </div>
    );
};
export default Login;