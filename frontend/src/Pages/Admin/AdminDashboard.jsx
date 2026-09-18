import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {

    const admin = {
        name: "Daniel",
        age: 42,
        dob: "20/10/2022",
        year: 2024,
    };

    return (
        <div className="AdminDashboard">
            <div className="Navbar">
                <Navbar />
            </div>

            <Sidebar />

            <main className="mainBody">

                <div className="profile">

                    <div className="profile-image">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Admin"
                        />
                    </div>

                    <div className="description">

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
                                    <td>{admin.name}</td>
                                    <td>{admin.age}</td>
                                    <td>{admin.dob}</td>
                                    <td>{admin.year}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default AdminDashboard;