import style from './header.css'

export default function Header({currentPage,setCurrentPage}){
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
            <div className={'right_content'}>
                <div className={'like_box'}></div>
                <div className={'addProduct_box'}></div>
            </div>
        </div>
    )
}