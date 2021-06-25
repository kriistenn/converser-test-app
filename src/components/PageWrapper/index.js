import React from 'react'
import Navbar from '../Navbar'
import style from './wrapper.module.css'

function PageWrapper( { children } ) {
    
    return (
        <div className={style.page}>
            <Navbar/>
            {children}
        </div>
    )
}

export default PageWrapper