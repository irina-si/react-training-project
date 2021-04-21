import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    

     let dialogsElements = props.dialogsData
                            .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

     let messagesElements = props.messagesData
                            .map( (message) => <Message message={message.message} id={message.id}/>)
     
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }    
    
    let editMessage = () => {
        let text = newMessageElement.current.value;
        return props.editMessage(text);
    }

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
               {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessageElement} onChange={editMessage} value={props.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>   
           </div>
        </div>
        
    )
}

export default Dialogs;