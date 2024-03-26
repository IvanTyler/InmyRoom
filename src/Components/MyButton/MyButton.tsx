import { FC } from "react";
import style from './MyButton.module.scss';

interface IMyIconProps {
    id?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const MyButton: FC<IMyIconProps> = ({ children, onClick, id }) => {

    return (
        <a href={id} className={style.myButton} onClick={onClick}>
            {children}
        </a>
    )
}