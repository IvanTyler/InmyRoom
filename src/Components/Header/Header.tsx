import { FC } from "react";
import style from './Header.module.scss'

export const Header: FC = () => {
    return (
        <header id="header" className={style.header}>
            <h1 className={style.header__title}>
                Одноэтажный дом с двумя спальнями в стиле эклектика
            </h1>
        </header>
    )
}