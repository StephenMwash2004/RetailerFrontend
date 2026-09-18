import { useState } from "react";

function AssignedOrders() {

    const [orders] = useState([
        {
            id: 1,
            retailer: "John Traders",
            product: "Milk",
            quantity: 20,
            location: "Nairobi",
            status: "Pending"
        },
        {
            id: 2,
            retailer: "Mary Shop",
            product: "Yoghurt",
            quantity: 10,
            location: "Thika",
            status: "Delivered"
        }
    ]);


    return(
        <div className="assignedOrders">

            <h2>Assigned Orders</h2>

            <table>

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Retailer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>

                    {orders.map((order)=>(

                        <tr key={order.id}>

                            <td>{order.id}</td>
                            <td>{order.retailer}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.location}</td>
                            <td>{order.status}</td>

                            <td>
                                <button>
                                    Update Status
                                </button>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AssignedOrders;