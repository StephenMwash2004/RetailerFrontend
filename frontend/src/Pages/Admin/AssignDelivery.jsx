import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";


function AssignDelivery() {
    const [name, setName]=useState();

    return(
        <div>
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="Sidebar">
                <Sidebar name="DashBoard"/>
            </div>
        </div>
    );
    
}
export default AssignDelivery;