import { FC } from "react";
import style from './Header.module.scss'
import bg from '../../assets/img/kitchen.png'

export const Header: FC = () => {
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>
                Одноэтажный дом с двумя спальнями в стиле эклектика
            </h1>
            <img className={style.header__img} src={bg} alt='Kitchen' />
        </header>
    )
}