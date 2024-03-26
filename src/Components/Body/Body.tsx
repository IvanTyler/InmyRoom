import style from './Body.module.scss'

interface ContainerProps {
    children: React.ReactNode
}

export const Body: React.FC<ContainerProps> = ({ children }) => {

    return (
        <div className={style.container}>
            {children}
        </div>
    )
}