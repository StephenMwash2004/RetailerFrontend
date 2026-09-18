import { useState } from "react";

function Products(){

    const [products] = useState([
        {
            id: 1,
            name: "Milk",
            category: "Dairy",
            price: 50,
            stock: 100
        },
        {
            id: 2,
            name: "Yoghurt",
            category: "Dairy",
            price: 80,
            stock: 50
        },
        {
            id: 3,
            name: "Bread",
            category: "Bakery",
            price: 60,
            stock: 70
        }
    ]);


    return(
        <div className="products">

            <h2>Products</h2>


            <button>
                Add Product
            </button>


            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>

                </thead>


                <tbody>

                    {products.map((product)=>(

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>
                                {product.name}
                            </td>

                            <td>
                                {product.category}
                            </td>

                            <td>
                                KSh {product.price}
                            </td>

                            <td>
                                {product.stock}
                            </td>

                            <td>

                                <button>
                                    Edit
                                </button>

                                <button>
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>


        </div>
    );
}

export default Products;