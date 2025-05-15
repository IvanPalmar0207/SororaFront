//Styles
import '../../styles/session/notes.css'
//React-hook-forms
import { useEffect, useState } from 'react'
//React-router-dom
import { Link } from 'react-router-dom'
//Images
import addNote from '../../assets/note/addNote.svg'
import bookNotes from '../../assets/note/bookNotes.png'
//Note context
import { useNote } from '../../context/noteContext'
//Components
import CardNote from '../../components/cardNote'
import Loader from '../../components/loader'
function Notes(){

    const {notes, allNoteApi} = useNote()
    const [loading, setLoading] = useState(true)

    useEffect(() => {        
        try{
            allNoteApi()        
        }catch(e){
            console.error(e)
        }finally{
            setLoading(false)
        }
    },[notes])

    if(loading){
        return <Loader />
    }

    return(
        <section className='sectionNotes'>
            <div className='containerNotes'>                
                <div className='containerTitleNote'>
                    <div>
                        <h4>
                            Registro
                        </h4>
                        <h3>
                            Agrega notas segun                        
                            cómo te sientes y                             
                            cómo va tu relación
                        </h3>
                    </div>
                    <div>
                        <img src={bookNotes} alt="bookNote" />
                    </div>
                </div>

                <div className = 'containerDescNote'>
                    <p>
                        Aquí puedes llevar un registro de cómo te vas sintiendo en 
                        la relación o de cómo sientes que va la relación. Asegúrate
                        de guardarlo para que puedas volver a leerlo cuando desees. 
                    </p>
                </div>
                       
                <div className='containerAllN'>
                    <div className='containerAllNotesU'>
                        {
                            notes.map((note) => {
                                return(
                                    <CardNote 
                                        key={note.id}
                                        id={note.id}
                                        title={note.titleNote}
                                        date={note.createdNote}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                    
                <div className='linkAddContainer'> 
                    <Link className='linkNoteAdd' to={'/addNote'}>
                        <h3>
                            Crea una 
                            <br />
                            nueva nota
                        </h3>
                        <img src={addNote} alt="addNote" />                
                    </Link> 
                </div>                                   
            </div>
        </section>
    )
}

export default Notes