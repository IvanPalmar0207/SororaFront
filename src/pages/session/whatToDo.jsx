//Styles
import '../../styles/session/whatToDo.css'
//Images
import tips from '../../assets/whatToDo/tips.svg'
import alternatives from '../../assets/whatToDo/alternatives.png'
import attention from '../../assets/whatToDo/attentionRoute.png'
//Components
import Card from '../../components/card'
import DescriptionSect from '../../components/descriptionSection'

const dataDo = [
    {
        id : 1,
        title : 'Tips',
        text : (
            <div> 
                ¿Cómo llevar una
                <br />
                relación saludable?
            </div>
        ),
        icon : tips,
        route : 'tips'
    },
    {
        id : 2,
        title : 'Rutas de Atención',
        text : (
            <div>
                ¿A dónde acudir?
            </div>
        ),
        icon : attention,
        route : 'attention'
    },
    {
        id : 3,
        title : 'Acciones Alternativas',
        text : (
            <div>
                ¿Qué otras
                <br />
                opciones tengo?
            </div>
        ),
        icon : alternatives,
        route : 'alternatives'
    }
]

const textDesc = () => {
    return(
        <span>
            Conoce el paso a paso a seguir para recibir atención ante los diversos 
            tipos de violencia, lee tips de relaciones saludables y acciones 
            alternativas enfocadas a tu trabajo personal para prevenir la aparición 
            de violencia en tu relación.
        </span>
    )
}

function WhatToDo(){
    return(
        <section>
            <div>
                <DescriptionSect text={textDesc()} />
            </div>
            <div className='sectionWhatTo'>            
            {
                dataDo.length > 1 ? dataDo.map((data) => {
                    return(
                        <div key={data.id} className='containerCardsWT'>
                            <Card {...data} routeTab={'toDo'}/>
                        </div>
                    )
                }) : 
                <div>
                    No hay datos para cargar y mostrar
                </div> 
            }
        </div>
        </section>
    )
}

export default WhatToDo