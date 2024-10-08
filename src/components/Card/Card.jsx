import s from './Card.module.css'

export function Card(){
    return(
        <div className={s.card}>
            <div className={s.cardImg}></div>
            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
            <div className={s.cardBottom}>
                <div className={s.price}>335 ₽</div>
                <a href="#">Добавить в корзину</a>
            </div>
        </div>
    )
}