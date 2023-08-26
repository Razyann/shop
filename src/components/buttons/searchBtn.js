import style from './buttons.css'
export default  function SearchBtn({setSearch,search,handlerSearch}){
    return(
        <div className={'search_btn'} onClick={()=>{
            handlerSearch()
        }}></div>
    )
}