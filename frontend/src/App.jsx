import {BrowseRouter, Routes, Route} from "react-router-dom";

//Authentication
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";

//ADMIN DASHBOARD
import AdminDashBoard from "./Pages/Admin/AdminDashboard";
import AssignDelivery from "./Pages/Admin/AssignDelivery";
import Orders from "./Pages/Admin/Orders";
import Users from "./Pages/Admin/Users";

//DELIVERY DASHBOARD
import AssignedOrders from "./Pages/Delivery/AssignedOrders";
import DeliveryDashboard from "./Pages/Delivery/DeliveryDashboard";
import UpdateStatus from "./Pages/Delivery/UpdateStatus";

//RETAILER DASHBOARD
import MyOrders from "./Pages/retailer/Myorders";
import PlaceOrders from "./Pages/retailer/PlaceOrders";
import Products from "./Pages/retailer/Products";
import RetailerDashboard from "./Pages/retailer/RetailerDashboard";


function App(){
  return(
    <BrowseRouter>
        <Route>
            {/* AUTHENTICATION */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            {/* ADMIN DASHBOARD */}
            <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
            <Route path="/admin/delivery" element={<AssignDelivery/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/users" element={<Users/>}/>

            {/* DELIVERY DASHBOARD */}
            <Route path="/Delivery/Orders" element={<AssignedOrders/>}/>
            <Route path="/Delivery/dashboard" element={<DeliveryDashboard/>}/>
            <Route path="/Delivery/status" elememt={<UpdateStatus/>}/>

            {/* RETAILER'S DASHBOARD */}
            <Route path="/retailer/Orders" element={<MyOrders/>}/>
            <Route path="/retailer/product" element={<PlaceOrders/>}/>
            <Route path="/retailer/dashboard" elemet={<RetailerDashboard/>}/>
        </Route>
    </BrowseRouter>
  );
}
export default App;