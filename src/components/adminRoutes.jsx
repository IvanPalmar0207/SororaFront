//UserContext
import { UseUser } from "../context/userContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";
//Token Access
import { ACCESS_TOKEN } from "../constants";

function AdminRoutes(){
    const {user} = UseUser()
    const token = localStorage.getItem(ACCESS_TOKEN)

    if(!user?.isAdmin && !token){
        return <Navigate to={'/home'} replace={true}/>
    }

    console.log(user)

    return(
        <Outlet />
    )

}

export default AdminRoutes