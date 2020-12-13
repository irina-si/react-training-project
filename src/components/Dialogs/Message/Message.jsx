import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={`${s.message} ${s.messageFrom}`}>
            <img src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' 
            alt='avatarka'/>
            {props.message}
        </div>
    )
}

export default Message;