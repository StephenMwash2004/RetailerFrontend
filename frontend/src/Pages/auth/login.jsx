import { useState } from "react";


function Login(){
    const [formData, setFormData]=useState({
        name:"",
        email:"",
    });

    const handleSubmit= (e) =>{
        e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={handleSubmit}/>
                <input type="text" required name="Email" value={email} />
                <input type="password" required name="Password" value={password}/>
                <Button type="Submit">Sign In</Button>
            </form>
        </div>
    );
}
export default Login;