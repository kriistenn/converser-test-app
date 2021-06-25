import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

const Navbar = () => {
    return (
        <div className={style['container']}>
            <div className={style['container-nav_content']}>
                <div className={style['title-content']}>
                    <h1 className={style['title']}> SPA для конвертирования валют</h1>
                </div>
                <div className={style['menu']}>
                    <ul>
                        <li>
                            <NavLink 
                                to='/'
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                                >
                                    Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/converter' 
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                            >
                                Конвертация
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={style['copyright']}>
                    <p className={style['text']}>Created by Christina Kolitvinova</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
