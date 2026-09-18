import { useState } from "react";

function MyOrders(){

    const [orders] = useState([
        {
            id: 1,
            product: "Milk",
            quantity: 20,
            date: "18/09/2026",
            status: "Pending"
        },
        {
            id: 2,
            product: "Yoghurt",
            quantity: 10,
            date: "17/09/2026",
            status: "Delivered"
        }
    ]);


    return(
        <div className="myOrders">

            <h2>My Orders</h2>


            <table>

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>


                <tbody>

                    {orders.map((order)=>(

                        <tr key={order.id}>

                            <td>{order.id}</td>

                            <td>
                                {order.product}
                            </td>

                            <td>
                                {order.quantity}
                            </td>

                            <td>
                                {order.date}
                            </td>

                            <td>
                                {order.status}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>


        </div>
    );
}

export default MyOrders;