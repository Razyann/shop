import style from './header.css'
import SearchBtn from "../buttons/searchBtn";
import SearchInput from "./searchInput";
import {useState} from "react";

export default function Header({currentPage,setCurrentPage,search,setSearch,handlerSearch}){
    // let [search,setSearch] = useState('')
    return(
        <div className={'header'}>
            <div className={'logo_box'}></div>
            <div className={'nav_box'}>
                <div className={'man_nav'} onClick={()=> {
                    currentPage('man')
                }}>
                    <p>
                        MAN
                    </p>
                </div>
                <div className={'woman_nav'}>
                    <p>
                        WOMAN
                    </p>
                </div>
                <div className={'kids_nav'}>
                    <p>
                        KIDS
                    </p>
                </div>
            </div>
            <div className={'search_cont'}>
                <SearchInput search={search} setSearch={setSearch}/>
                <SearchBtn setSearch={setSearch} search={search} handlerSearch={handlerSearch}/>
            </div>
            <div className={'right_content'}>
                <div className={'like_box'}></div>
                <div className={'addProduct_box'}></div>
            </div>
        </div>
    )
}