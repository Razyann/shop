import style from './modal.css'
import EditBtn from "../buttons/editbutton";
import UpdateBtn from "../buttons/updateBtn";
import {useState} from "react";

export default function Modal({display,item}){
    let [price,setPrice] = useState(item.price)
    let [name,setName] = useState(item.name)
    return(
        <div className={'modal'} style={{display}}>
            <input className={'input_price'} placeholder={'Edit Price'} type={'text'} value={price} onChange={(e)=>{
                // e.target.value
                setPrice(e.target.value)
            }}/>
            <input className={'input_name'} placeholder={'Edit Name'} type={'text'} value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <UpdateBtn />

        </div>
    )
}