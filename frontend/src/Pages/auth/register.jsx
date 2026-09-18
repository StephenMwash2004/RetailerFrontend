import { useState } from "react";


function Register(){

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });


    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);


        fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers:{
                "Content-Type":"application/json",
            },

            body: JSON.stringify(formData),

        })

        .then((response)=>response.json())

        .then((data)=>{
            console.log(data);
        })

        .catch((error)=>{
            console.error(error);
        });

    };


    return(

        <div>

            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />


                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />


                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />


                <button type="submit">
                    Sign Up
                </button>


            </form>

        </div>

    );
}

export default Register;