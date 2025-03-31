//Styles
import '../../styles/session/testimonies.css'
//Images
import testimonieImg from '../../assets/myNets/testimonies.svg'
//React-hooks
import { useEffect, useState } from 'react'
//TestProvider
import { useTestimonie } from '../../context/testContext'
//Carousel Component
import Carousel from 'react-material-ui-carousel'
//Component
import CardTestimonie from '../../components/cardTestimonie'
//Icons
import { CiFaceFrown } from "react-icons/ci";
function Testimonies(){

    //TestMethods
    const {allTestUserApi, catTest} = useTestimonie()
    //Category States
    const [categoryOne, setCategoryOne] = useState([])
    const [categorySecond, setCategorySecond] = useState([])

    useEffect(() => {
      async function loadData(){
            const res = await allTestUserApi(1)
            setCategoryOne(res)
      } 
      loadData() 
    },[catTest])

    useEffect(() => {
        async function loadData(){
            const res = await allTestUserApi(2)
            setCategorySecond(res)            
        }

        loadData()
    },[catTest])

    return(
        <section className='sectionTestimonies'>
            <div className='containerTestimonies'>
                <div className='containerTextTesti'>
                    <div className='containerInfoTest'>
                        <h3>
                            Testimonios
                        </h3>
                        <h2>
                            Conoce mujeres 
                            <br />
                            que han vivido
                            <br />
                            violencias
                        </h2>
                    </div>
                    <div className='containerImgTest'>
                        <img src={testimonieImg} alt="imgTestimonie" />
                    </div>
                </div>

                <div className='containerSectionTest'>
                    <p>
                        Conoce a mujeres que <span className='textTest'>lograron 
                        <br />
                        superar</span> la violencia: 
                    </p>
                    
                    <div className='containerTestimoniesApi'>
                        <div className='containerTestimoniesApi'>
                            {
                                categoryOne.length > 0
                                ?                                
                                <Carousel 
                                    className='carouselTestimonie'                                                                                                        
                                    animation='slide'
                                    duration={200}                                
                                    autoPlay={false}      
                                    swipe={true}            
                                >
                                    {categoryOne.map(cat => {
                                        return(
                                            <div className='carouselColor' key={cat.id}>
                                                <CardTestimonie                                                     
                                                    id={cat.id}
                                                    authorTest={cat.authorTest}
                                                    descriptionTestf={cat.descriptionTest}
                                                    articleTest={cat.articleTest}
                                                />
                                            </div>
                                        )
                                    })}
                                </Carousel>                                
                                :
                                <div className='noDataTest'>
                                    <div className='containerIconND'>
                                        <CiFaceFrown className='iconND'/>
                                    </div>
                                    <p>
                                        No hay testimonios relacionados a la categoría
                                        "lograrón superar la violencia", gracias por 
                                        visitar esta sección.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>

                </div>

                <div className='containerSectionTest'>
                    <p>
                        Conoce mujeres que <span className='textTest'> han pasado lo 
                        <br />
                        mismo que tú</span> / vivido violencias:
                    </p>

                    <div className='sectionTestimoniesApi'>
                        <div className='containerTestimoniesApi'>
                            {
                                categorySecond.length > 0
                                ?
                                <Carousel 
                                    className='carouselTestimonie2'
                                    animation='slide'
                                    duration={200}                                
                                    autoPlay={false}       
                                    swipe={true}
                                >
                                    {
                                        categorySecond.map(cat => {
                                            return(
                                                <div className='carouselColor2' key={cat.id}>
                                                    <CardTestimonie                                                         
                                                        id={cat.id}
                                                        authorTest={cat.authorTest}
                                                        descriptionTestf={cat.descriptionTest}
                                                        articleTest={cat.articleTest}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                                :                                
                                <div className='noDataTest'>
                                    <div className='containerIconND'>
                                        <CiFaceFrown 
                                            className='iconND'
                                            NextIcon={false}
                                            PrevIcon={false}
                                            navButtonsAlwaysInvisible={true}                                
                                            indicators={false}                                    
                                            animation='slide'
                                            duration={500}
                                            IndicatorIcon={false}
                                        />
                                    </div>
                                    <p>
                                        No hay testimonios relacionados a la categoría
                                        "han pasado lo mismo que tu", gracias por 
                                        visitar esta sección.
                                    </p>
                                </div>
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonies