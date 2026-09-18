import { useState } from "react";

function UpdateStatus() {

    const [status, setStatus] = useState("Pending");


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            status
        });

        // Send update to backend here
    };


    return(
        <div className="updateStatus">

            <h2>Update Order Status</h2>


            <form onSubmit={handleSubmit}>

                <label>
                    Select Status
                </label>


                <select
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                >

                    <option value="Pending">
                        Pending
                    </option>

                    <option value="Picked">
                        Picked
                    </option>

                    <option value="On the Way">
                        On the Way
                    </option>

                    <option value="Delivered">
                        Delivered
                    </option>

                </select>


                <button type="submit">
                    Update
                </button>


            </form>

        </div>
    );
}

export default UpdateStatus;