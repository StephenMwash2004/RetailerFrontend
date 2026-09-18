import AssignedOrders from "./AssignedOrders";

function DeliveryDashboard(){

    const delivery = {
        name: "John Kamau",
        phone: "0712345678",
        vehicle: "Motorbike"
    };


    return(
        <div className="deliveryDashboard">

            <h1>Delivery Dashboard</h1>


            {/* Delivery Profile */}
            <div className="profile">

                <h2>Profile</h2>

                <p>
                    Name: {delivery.name}
                </p>

                <p>
                    Phone: {delivery.phone}
                </p>

                <p>
                    Vehicle: {delivery.vehicle}
                </p>

            </div>


            {/* Statistics */}
            <div className="statistics">

                <div className="card">
                    <h3>Assigned Orders</h3>
                    <p>10</p>
                </div>


                <div className="card">
                    <h3>Pending</h3>
                    <p>5</p>
                </div>


                <div className="card">
                    <h3>Delivered</h3>
                    <p>5</p>
                </div>

            </div>


            {/* Orders */}
            <div className="ordersSection">

                <AssignedOrders/>

            </div>


        </div>
    );
}

export default DeliveryDashboard;