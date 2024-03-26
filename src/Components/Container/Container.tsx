import React, { useEffect, useRef, useState } from "react";
import style from './Container.module.scss'
import { Header } from "../Header/Header";
import { TextLorem } from "../TextLorem/TextLorem";
import { Tapbar } from "../Tapbar/Tapbar";
import bg from '../../assets/img/kitchen.png'

export const Container: React.FC = () => {

    const [scrollTop, setScrollTop] = useState(0)
    const [scrollBarActive, setScrollBarActive] = useState(false)
    const [scrollBarComplete, setScrollBarComplete] = useState(false)

    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        currentScrollTop()
        scrollendTop()
    }, [])

    function currentScrollTop() {
        container.current!.addEventListener('scroll', () => {
            const scrollTop = container.current!.scrollTop
            setScrollBarActive((prev: boolean) => prev = true)
            setScrollTop(scrollTop)
        });
    }

    function scrollendTop() {
        container.current!.addEventListener('scrollend', () => {
            setScrollBarActive((prev: boolean) => prev = false)
        });
    }

    if (scrollTop > 200 && !scrollBarActive) {
        setTimeout(() => {
            setScrollBarComplete((prev: boolean) => prev = true)
        }, 1000)
    }

    if (scrollTop > 200 && scrollBarActive) {
        setTimeout(() => {
            setScrollBarComplete((prev: boolean) => prev = false)
        }, 0)
    }


    return (
        <div ref={container} className={style.container}>
            <Header />
            <img src={bg} alt='' style={{
                marginTop: -78,
                position: 'relative',
                zIndex: -1,
                width: '100%',
                height: '100%',
            }} />
            <TextLorem />
            <Tapbar
                scrollTop={scrollTop}
                scrollBarComplete={scrollBarComplete}
            />
            <p style={{
                height: '58px',
            }}></p>
        </div>
    )
}