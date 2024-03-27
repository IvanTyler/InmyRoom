import { FC, useState } from "react";
import style from './Tapbar.module.scss'
import cx from 'classnames'

import iconShare from '../../assets/icon/share.svg'
import iconScrolLToTop from '../../assets/icon/ScrollTop.svg'
import iconComments from '../../assets/icon/comments.svg'
import iconLikes from '../../assets/icon/likes.svg'

import { MyButton } from "../MyButton/MyButton";
import { MyIcon } from "../MyIcon/MyIcon";

interface iTapBarProps {
    scrollTop: number,
    scrollBarComplete: boolean,
    container: any,
}

export const Tapbar: FC<iTapBarProps> = ({ scrollTop, scrollBarComplete, container }) => {

    const [countComments, setCountComments] = useState(7)
    const [countLikes, setCountLikes] = useState(28)

    const [isCopyLink, setIsCopyLink] = useState(false)


    const handlerCountComments = () => setCountComments((count: number) => count = count + 1)
    const handlerCountLikes = () => setCountLikes((count: number) => count = count + 1)

    const handlerScrollTop = () => {
        container.current!.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleShare = () => {

        if (navigator.share) {
            navigator.share({
                title: "Bits and pieces: Web Share API article",
                url: window.location.origin
            })

        } else {
            navigator.clipboard.writeText(window.location.origin)
            setIsCopyLink(true)
        }
    }

    if (isCopyLink) setTimeout(() => setIsCopyLink(false), 3000)

    const behaviorTapBar = () => {
        if (scrollTop > 200 && scrollBarComplete) return cx(style.tapBar)
        if (scrollTop > 200 && !scrollBarComplete) return cx(style.tapBar, style.hide)

        return cx(style.tapBar)
    }

    return (
        <ul className={behaviorTapBar()}>
            {isCopyLink && <p className={style.tapBar__message}>Link copied</p>}
            <li className={style.tapBar__item}>
                <MyButton onClick={handleShare}>
                    <MyIcon img={iconShare} alt={"share"} />
                </MyButton>
            </li>
            <li className={style.tapBar__item}>
                <MyButton onClick={handlerScrollTop}>
                    <MyIcon img={iconScrolLToTop} alt={"scroll-top"} />
                </MyButton>
            </li>
            <li className={style.tapBar__item}>
                <MyButton onClick={handlerCountComments}>
                    <MyIcon img={iconComments} alt={"comments"} />
                    {countComments}
                </MyButton>
            </li>
            <li className={style.tapBar__item}>
                <MyButton onClick={handlerCountLikes}>
                    <MyIcon img={iconLikes} alt={"likes"} />
                    {countLikes}
                </MyButton>
            </li>

        </ul>
    )
}