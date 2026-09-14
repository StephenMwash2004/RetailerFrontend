import {BrowseRouter, Routes, Route} from "react-router-dom";


import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AdminDashBoard from "./Pages/Admin/AdminDashboard";
import AssignDelivery from "./Pages/Admin/AssignDelivery";
import Orders from "./Pages/Admin/Orders";
import Users from "./Pages/Admin/Users";
import AssignedOrders from "./Pages/Delivery/AssignedOrders";
import DeliveryDashboard from "./Pages/Delivery/DeliveryDashboard";
import UpdateStatus from "./Pages/Delivery/UpdateStatus";


function App(){
  return(
    <BrowseRouter>
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
        </Route>
    </BrowseRouter>
  );
}
export default App;