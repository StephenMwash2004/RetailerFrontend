import { useState } from "react";

function Orders() {

    const [orders] = useState([
        {
            id: 1,
            retailer: "John Traders",
            product: "Milk",
            quantity: 20,
            status: "Pending"
        },
        {
            id: 2,
            retailer: "Mary Shop",
            product: "Yoghurt",
            quantity: 10,
            status: "Assigned"
        },
        {
            id: 3,
            retailer: "City Supermarket",
            product: "Butter",
            quantity: 15,
            status: "Delivered"
        }
    ]);

    return (
        <div className="orders">
            <h2>Orders</h2>

            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Retailer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.retailer}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.status}</td>
                            <td>
                                <button>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;