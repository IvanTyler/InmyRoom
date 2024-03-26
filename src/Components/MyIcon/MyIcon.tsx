import { FC } from "react";
import style from './MyIcon.module.scss'

interface IMyIconProps {
    img: string;
    alt: string;
}

export const MyIcon: FC<IMyIconProps> = ({ img, alt }) => {
    return (
        <img src={img} alt={alt} />
    )
}