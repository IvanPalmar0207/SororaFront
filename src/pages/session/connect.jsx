//Styles
import '../../styles/session/connect.css'
//Images
import connectLogo from '../../assets/myNets/conect.svg'

function Connect(){
    return(
        <section className='sectionConnect'>
            <div className='connectContainer'>
                <div className='containerInfoCon'>
                    <div className='containerTitleCon'>
                        <h3>
                            Conecta
                        </h3>
                        <h2>
                            Conéctate con otras                            
                            <br />
                            mujeres a través de                            
                            <br />
                            la RED SORORA en 
                            <br />
                            facebook.
                        </h2>
                    </div>
                    <div className='containerLogoCon'>    
                        <img src={connectLogo} alt="logoConnect" />                    
                    </div>
                </div>
                <p className='textCon'>
                    Queremos garantizar tu privacidad y,                    
                    seguridad, así que es un grupo invisible y                     
                    privado, solicita el acceso y en muy corto                    
                    tiempo tendrás acceso a la red de mujeres                    
                    que se apoyan, comparten experiencias y                    
                    recursos sobre relaciones saludables y sobre                     
                    prevención y atención de violencias de                     
                    pareja.
                </p>    
                
                <div className='containerButtonCon'>
                    <a className='buttonCon' href="https://www.facebook.com/groups/803203703762170/" target="_blank" rel="noopener noreferrer">
                        Unirte a la RED SORORA
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Connect