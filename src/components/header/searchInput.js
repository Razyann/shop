import style from './header.css'
export default function SearchInput({search,setSearch}){
    return(
        <input type={'text'} className={'input_search'} placeholder={'Search'} onChange={(e)=>{
            setSearch(e.target.value)
        }}/>


    )
}