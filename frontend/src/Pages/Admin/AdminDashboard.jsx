import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AdminDashboard() {

    const [name,setName]=useState("");

    return(
        <div className="AdminDashboard">
            <div className="Navbar">
                <Navbar/>
            </div>
            
            <Sidebar/>

            <main className="mainBody">
                <div className="profile">
                    <div className="profile-image">
                        <img src="" alt="Admin Pic" />
                    </div>
                    <div className="description">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Date of Birth</th>
                                <th>Years</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </main>

        </div>
    );
}
export default AdminDashboard;