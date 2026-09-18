import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function RetailerDashboard() {
    return(
        <div>
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="Sidebar">
                <Sidebar/>
            </div>

            <main className="main">
                <div className="profile">
                    <div className="profileImage">
                        <img src="" alt="Retailer's Image" /> 
                    </div>
                    <div className="profileDescription">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Date of Birth</th>
                                <th>Year</th>
                            </tr>
                            <tr>
                                <td>Stephen</td>
                                <td>21 yrs</td>
                                <td>20/06/2004</td>
                                <td>2026</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
            </main>
        </div>
    );
};
export default RetailerDashboard;