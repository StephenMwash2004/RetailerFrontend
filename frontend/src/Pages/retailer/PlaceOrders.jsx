import { useState } from "react";

function PlaceOrders(){

    const [orderData, setOrderData] = useState({
        product:"",
        quantity:"",
        location:"",
    });


    const handleChange = (e)=>{

        const {name,value} = e.target;

        setOrderData({
            ...orderData,
            [name]:value,
        });

    };


    const handleSubmit = async(e)=>{

        e.preventDefault();


        console.log(orderData);


        fetch("http://localhost:5000/api/orders",{

            method:"POST",

            headers:{
                "Content-Type":"application/json",
            },

            body:JSON.stringify(orderData),

        })

        .then((response)=>response.json())

        .then((data)=>{
            console.log(data);
        })

        .catch((error)=>{
            console.log(error);
        });

    };


    return(

        <div className="placeOrders">

            <h2>Place Order</h2>


            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="product"
                    placeholder="Product Name"
                    value={orderData.product}
                    onChange={handleChange}
                    required
                />


                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={orderData.quantity}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="location"
                    placeholder="Delivery Location"
                    value={orderData.location}
                    onChange={handleChange}
                    required
                />


                <button type="submit">
                    Place Order
                </button>


            </form>


        </div>

    );
}

export default PlaceOrders;