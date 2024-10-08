import { NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import s from './Catalog.module.css'

export function Catalog(){
    return(
        <div className={s.catalog}>
            <h1>Каталог товаров</h1>
            <div className={s.categories}>
                <h3>Категории:</h3>
                <nav>
                    <NavLink className={s.active} to="#">Все товары</NavLink>
                    <NavLink to="#">Шины/колеса</NavLink>
                    <NavLink to="#">Масла</NavLink>
                    <NavLink to="#">Ароматизаторы</NavLink>
                </nav>
            </div>
            <div className={s.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className={s.more}>
                <a href="#">Загрузить еще товары</a>
            </div>
        </div>
    )
}