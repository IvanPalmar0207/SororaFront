//Images
import logoA from '../assets/logoArea.png'
//Styles
import '../styles/components/descSection.css'
function DescriptionSect({text}){    
    return(
        <div className='containerTextWTD'>
            <div>
                <img src={logoA} alt="areandinLogo" />
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}

export default DescriptionSect