//Styles
import '../styles/components/helpUser.css'
//Icons
import { MdOutlineQuestionMark } from "react-icons/md";
//User Manual
import userManual from '../../ManualUser.pdf'
function HelpUser(){    
    return(
        <a className='userManualA' href={userManual} download={userManual}>
            <div className='containerHelpUser'>            
                <div className='contIconHelp'>
                    <MdOutlineQuestionMark className='iconHelp'/>
                </div>            
            </div>
        </a>
    )
}

export default HelpUser