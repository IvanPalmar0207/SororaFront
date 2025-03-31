//UserContext
import { UseUser } from "../context/userContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";

function NoTokenRoute(){
    const {isAuthenticated} = UseUser()

    if(isAuthenticated){
        return <Navigate to='/home' replace={true}/>
    }

    return (
        <Outlet />
    )

}

export default NoTokenRoute