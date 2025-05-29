//Styles
import '../styles/components/cardMoreInfo.css'
//React-hooks
import { useState } from "react"
//Material Ui
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
//Icons
import { IoIosCloseCircleOutline } from "react-icons/io";
function CardMoreInfo({
    nameAttention, 
    descriptionAttention,
    imageAttention
}){

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return(
        <div className='containerCardMI'>
            <div onClick={toggleOpen} className='containerFirstMI'>
                <div>
                    <img src={imageAttention} alt="imgAttention" />
                </div>
                <div>
                    <h3>
                        {nameAttention.slice(0, 28)}...
                    </h3>
                </div>
            </div>
            <Dialog
                open = {open}
                onClick={toggleOpen}
                aria-labelledby="titleDialog"
                aria-describedby="contentDialog"
            >
                <div className='containerButtonMI'>
                    <button onClick={toggleOpen} className='buttonMI'>
                        <IoIosCloseCircleOutline className='iconButtonMI' />
                    </button>
                </div>
                <DialogTitle
                    id = 'titleDialog'
                >
                    <div className='containerDialogMI'>
                        <h3>
                            {nameAttention}
                        </h3>
                    </div>
                </DialogTitle>

                <DialogContent id="contentDialog">
                    <div className='containerTextImageMI'>
                        <div>
                            <img src={imageAttention} alt="imgAttention" />
                        </div>
                        <div>
                            <textarea          
                                readOnly = {true}                      
                                rows = {15}
                            >
                                {descriptionAttention}
                            </textarea>
                        </div>
                    </div>
                </DialogContent>
                <div className='containerButtonClose'>
                    <button onClick={toggleOpen}>
                        Cerrar
                    </button>
                </div>
            </Dialog>
        </div>
    )
}

export default CardMoreInfo