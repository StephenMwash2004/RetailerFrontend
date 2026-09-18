import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AssignDelivery() {
    const [deliveryPerson, setDeliveryPerson] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            deliveryPerson,
        });

        // Send to backend here
    };

    return (
        <div>
            <div className="Navbar">
                <Navbar />
            </div>

            <div className="Sidebar">
                <Sidebar name="Dashboard" />
            </div>

            <main className="mainBody">
                <h2>Assign Delivery</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Delivery Person</label>

                        <input
                            type="text"
                            placeholder="Enter delivery person's name"
                            value={deliveryPerson}
                            onChange={(e) =>
                                setDeliveryPerson(e.target.value)
                            }
                        />
                    </div>

                    <button type="submit">
                        Assign Delivery
                    </button>
                </form>
            </main>
        </div>
    );
}

export default AssignDelivery;