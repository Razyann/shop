import Header from "../header/header";
import Directory from "../leftcontent/directory";
import style from'./homePage.css'
import ProductCard from "../productcard/productcard";
import {manData} from "../../fakeData";
import {womanData} from "../../fakeData";
import {kidData} from "../../fakeData";
import Modal from "../modal/modal";

export default function HomePage(){
    const handlerEdit = (item,show,ishow) =>{
        if(ishow ==='none'){
            show('block')
        } else if(ishow === 'block'){
            show('none')
        }
    }
    return(
        <>
        <Header/>
            <div className={'container'}>
                <Directory/>
                <div className={'product_cont'}>
                    {manData.map((item) => {
                    return <ProductCard handlerEdit={handlerEdit} item={item}/>
                })}
                    {womanData.map((item) => {
                        return <ProductCard item={item}/>
                    })}
                    {kidData.map((item) => {
                        return <ProductCard item={item}/>
                    })}

                </div>
            </div>
        </>

    )
}