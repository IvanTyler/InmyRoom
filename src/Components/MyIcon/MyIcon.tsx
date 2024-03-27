import { FC } from "react";

interface IMyIconProps {
    img: string;
    alt: string;
}

export const MyIcon: FC<IMyIconProps> = ({ img, alt }) => {
    return (
        <img src={img} alt={alt} />
    )
}