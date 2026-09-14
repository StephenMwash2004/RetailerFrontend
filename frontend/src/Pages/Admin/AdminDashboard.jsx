import { useState } from "react";
import Navbar from "../components/Navbar";
import 

function AdminDashboard() {

    const [name,setName]=useState("");

    return(
        <div>
            <Navbar/>
            <Sidebar/>
        </div>
    );
}
export default AdminDashboard;