//Styles
import '../../styles/session/tellRed.css'
//Images
import tellImg from '../../assets/note/bookNotes.png'
//React-router-dom
import { Link } from 'react-router-dom';
function TellRed(){
    return(
        <section className='sectionTellRed'>
            <div className='containerTellRed'>
                <div className='containerTitleTellRed'>
                    <div>
                        <h4>
                            Red Cuéntanos
                        </h4>
                        <h3>
                            Red de apoyo de mujeres que
                            pasan por lo mismo que tú.
                        </h3>
                    </div>
                    <div>
                        <img src={tellImg} alt="ImgRed" />
                    </div>
                </div>
                <div className='containerTextTellRed'>
                    <p>
                        ¿Te encuentras saliendo de una situación de violencia o de una 
                        relación violenta? Ingresa a Nosotras contamos. Aquí podrás 
                        encontrar una red de apoyo desde distintas áreas (laboral, 
                        psicológica, jurídica, etc.,) para que tu proceso sea más 
                        sencillo. Además, podrás encontrar historias de otras mujeres 
                        que están a travesando lo mismo que tú.
                    </p>
                    <div className='containerButtonTell'>
                        <Link to={'https://drive.google.com/drive/u/0/folders/1bSWb9COnlt7rz_WYMzsP4iWY6soNmFCJ'}>
                            <button type='button' className='buttonTellRed'>
                                Red Cuéntanos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TellRed;