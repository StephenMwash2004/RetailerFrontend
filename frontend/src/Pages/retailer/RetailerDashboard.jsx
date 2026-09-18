import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function RetailerDashboard() {

    const retailer = {
        name:"Stephen",
        age:"21 yrs",
        dob:"20/06/2004",
        year:"2026"
    };


    return(
        <div className="RetailerDashboard">

            <div className="Navbar">
                <Navbar/>
            </div>


            <div className="Sidebar">
                <Sidebar/>
            </div>


            <main className="main">

                <div className="profile">


                    <div className="profileImage">

                        <img
                            src="https://via.placeholder.com/150"
                            alt="Retailer"
                        />

                    </div>


                    <div className="profileDescription">


                        <table>

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Date of Birth</th>
                                    <th>Year</th>
                                </tr>
                            </thead>


                            <tbody>

                                <tr>

                                    <td>{retailer.name}</td>

                                    <td>{retailer.age}</td>

                                    <td>{retailer.dob}</td>

                                    <td>{retailer.year}</td>

                                </tr>

                            </tbody>


                        </table>


                    </div>


                </div>


            </main>


        </div>
    );
}

export default RetailerDashboard;