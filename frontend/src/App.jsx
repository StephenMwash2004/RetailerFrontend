import {BrowseRouter, Routes, Route} from "react-router-dom";


import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AdminDashBoard from "./Pages/Admin/AdminDashboard";


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