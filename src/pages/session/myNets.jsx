//styles
import '../../styles/session/myNets.css'
//Images
import connect from '../../assets/myNets/conect.svg'
import testimonies from '../../assets/myNets/testimonies.svg'
import trust from '../../assets/myNets/trust.svg'
//Components
import Card from '../../components/card'

const dataNet = [
    {
        id : 1,
        title : 'Redes de Confianza',
        text : (
            <div>
                ¿En quiénes 
                <br /> 
                puedo confiar?
            </div>
        ),
        icon : trust,
        route : 'trustNet'
    },
    {
        id : 2,
        title : 'Conecta',
        text : (
            <div>
                Conéctate con otras 
                <br />
                mujeres a través de
                <br />
                la RED SORORA en
                <br />
                facebook.
            </div>
        ),
        icon : connect,
        route : 'connectNet'
    },
    {
        id : 3,
        title : 'Testimonios',
        text : (
            <div>
                Conoce mujeres
                <br />
                que han vivido
                <br />
                violencias
            </div>
        ),
        icon : testimonies,
        route : 'netTestimonie'
    }
]

function MyNets(){
    return(
        <section className='sectionMNet'>
                {
                    dataNet.length > 1 ? dataNet.map(data => {
                        return (
                            <div key={data.id} className='containerCards'>
                                <Card {...data} />
                            </div>
                    )
                    }) : 
                    <div>
                        No hay datos para mostrar, gracias por visitar esta sección.
                    </div>
                }
        </section>
    )
}

export default MyNets