//Styles
import '../../styles/session/notes.css'
//React-hook-forms
import { useEffect } from 'react'
//React-router-dom
import { Link } from 'react-router-dom'
//Images
import addNote from '../../assets/note/addNote.svg'
import bookNotes from '../../assets/note/bookNotes.png'
//Note context
import { useNote } from '../../context/noteContext'
//Components
import CardNote from '../../components/cardNote'

function Notes(){

    const {notes, allNoteApi} = useNote()

    useEffect(() => {        
        allNoteApi()        
    },[notes])

    return(
        <section className='sectionNotes'>
            <div className='containerNotes'>                
                <div className='containerTitleNote'>
                    <div>
                        <h4>
                            Registro
                        </h4>
                        <h3>
                            Lleva un registro de                             
                            cómo te sientes y                             
                            cómo va tu relación
                        </h3>
                    </div>
                    <div>
                        <img src={bookNotes} alt="bookNote" />
                    </div>
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