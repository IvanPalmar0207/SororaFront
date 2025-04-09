//Styles
import '../../styles/session/moreInfoTestimonies.css'
//TestProvider
import { useTestimonie } from '../../context/testContext'
//React-router-dom
import { useParams } from 'react-router-dom'
//Icons
import { FaPlay } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import React, { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
//React-hooks
import { useState } from 'react';
//React-player
import ReactPlayer from 'react-player';
function MoreInfoTestimonie(){

    //React-router-dom
    const params = useParams()

    //TestProvider
    const {testOneUserApi} = useTestimonie()

    //DataState
    const [testData, setTestData] = useState([])    

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await testOneUserApi(params.id)
                setTestData(res)
            }
        }
        loadData()
    },[])

    //VideoState
    const [videoState, setVideoState] = useState(false)

    const videoToggle = () => {
        setVideoState(!videoState)
    }

    return(
        <section className='sectionMoreInfoTest'>
            <div className='containerMoreInfoTest'>
                <div className='textInfoTest'>
                    <h3>
                        Testimonios
                    </h3>
                    <h2>
                        {testData.authorTest}
                    </h2>
                </div>
                <p>
                    {testData.descriptionTest}
                </p>

                <div className='containerLinkMIT'>
                    <p>
                        Conoce más de su historia haciendo click aquí:
                    </p>
                    <div className='containerButtonMT'>
                        <div className='containerButtonMTV'>
                            <button className='buttonMTV' onClick={() => {
                                videoToggle()
                            }}>
                                <div className='containerIconMT'>
                                    {
                                        videoState == false                                    
                                        ?
                                            <FaPlay />
                                        :
                                            <IoMdClose className='closeMT'/>
                                    }
                                </div>
                                <h5>
                                    {videoState == false 
                                        ?
                                            'Ver video'
                                        :
                                            'Cerrar video'
                                    }
                                </h5>
                            </button>
                        </div>
                        {videoState == true && (
                            <div className='containerVideoMT'>
                                <ReactPlayer
                                    className='videoMT' 
                                    url = {testData.videoTest}                                    
                                    playing
                                    width = "100%"
                                    height = "100%"
                                    controls = {true}
                                    muted = {true}
                                />                                
                            </div>
                        )}
                        <div className='sectionMT'>
                            <a className='containerLinkMT' href={testData.articleTest} target="_blank" rel="noopener noreferrer">
                                <div className='containerIconMT'>
                                    <FaLink className='iconLinkMT'/>
                                </div>
                                <h5>Leer Artículo</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfoTestimonie