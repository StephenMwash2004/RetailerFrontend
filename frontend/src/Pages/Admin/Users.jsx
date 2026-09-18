import { useState } from "react";

function Users() {

    const [users] = useState([
        {
            id: 1,
            name: "Daniel",
            email: "daniel@example.com",
            role: "Admin"
        },
        {
            id: 2,
            name: "John Traders",
            email: "john@example.com",
            role: "Retailer"
        },
        {
            id: 3,
            name: "Mary Delivery",
            email: "mary@example.com",
            role: "Delivery"
        }
    ]);

    return (
        <div className="users">

            <h2>Users</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default Users;