
import { Sprite, useTick, NineSlicePlane } from '@pixi/react';
import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/images/bg.jpg';
import welcom from '../assets/images/welcomegame.png'

const Welcome = () => {

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [welcomeW, setWelcomeW] = useState(0);

    useEffect(() => {
        function OnResize() {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', OnResize);
        return () => {
            window.removeEventListener('resize', OnResize);
        }
    }, [])

    let i = useRef(0);
    useTick(delta => {

        let scale = i.current += 1 * delta;

        if(welcom >= 500){

        }
        // setWelcomeW(scale);
    })

    return (
        <>
            {/* <Sprite
                anchor={0.5}
                x={500}
                y={400}
                width={width}
                image={bg}
            /> */}
            {/* <Sprite image={welcom}
                width={700}
                x={300}
            /> */}
            <NineSlicePlane
                image={welcom}
                anchor={[200, 100]}
                pivot={[200, 100]}

                //   leftWidth={50}
                //   topHeight={30}
                //   rightWidth={60}
                //   bottomHeight={180}

                width={width}
                height={100}
                x={100}
                y={100}

            // bottomHeight={0}
            // width={20 + 100 * size.x}
            // height={20 + 100 * size.y}
            // x={testx}
            // y={150 - (50 * size.y)}
            // y={test}

            />
        </>
    )
}

export default Welcome