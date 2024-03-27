import { FC } from "react";
import style from './MyButton.module.scss';

interface IMyIconProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const MyButton: FC<IMyIconProps> = ({ children, onClick }) => {

    return (
        <button className={style.myButton} onClick={onClick}>
            {children}
        </button>
    )
}