//Styles
import '../styles/components/helpUser.css'
//React-router-dom
import { Link } from "react-router-dom";
//Icons
import { MdOutlineQuestionMark } from "react-icons/md";
function HelpUser(){
    return(
        <Link to={'https://drive.google.com/drive/u/0/folders/10u3AIH6saNqabg_cGTaULQKRyr_Z428M'}>
            <div className='containerHelpUser'>            
                <div className='contIconHelp'>
                    <MdOutlineQuestionMark className='iconHelp'/>
                </div>            
            </div>
        </Link>
    )
}

export default HelpUser