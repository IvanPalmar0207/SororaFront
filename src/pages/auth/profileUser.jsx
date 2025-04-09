//React-router-dom
import { useParams } from "react-router-dom"
function ProfileUser(){

    //Router-dom
    const params = useParams()

    console.log(params.id)

    return(
        <div>
            Profile User
        </div>
    )
}

export default ProfileUser