import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    return <div className={s.dialog}>
    <img src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' 
        alt='avatarka'/>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
}

export default DialogItem;