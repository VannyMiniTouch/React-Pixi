// const { Stage, NineSlicePlane, useTick } = ReactPixi
import { NineSlicePlane, useTick } from "@pixi/react";
// const { useState, useRef } = React;
import React, { useEffect, useRef, useState } from "react";
import ka from '../assets/images/ka.png'

const Scale = () => {
    const [size, setSize] = useState({ x: 200, y: 130 });
    const [test, setTest] = useState(0)
    const [testx, setTestX] = useState(0)
    const i = useRef(0);
    const initY = 600;
    const initX = 180;
    //   console.log(i)
    useEffect(() => {
        setTest(initY);
        setTestX(initX)
        console.log('test')
        setSize({
            x: 2,
            y: 2,
        });
    }, [])
    useTick(delta => {
        // console.log('data')
        let countN = i.current += 0.05 * delta;
        let countY = countN * 200;
        let countX = countN * 150;

        // console.log(countX)
        if (countY <= 400) {
            console.log(countY)
            setTest(initY - countY)
        }

        if (countX >= 400 && countX <= 600) {
            console.log(countN, testx)
            setTestX(countX - 220)
        }

        // if (countY >= 400) {
        //     setSize({
        //         //   x: 2 + Math.cos(i.current) * 0.8,
        //         //   y: 2 + Math.sin(i.current) * 1.2,
        //         x: 2 + Math.cos(i.current) * 0.8,
        //         y: 2 + Math.cos(i.current) * 0.8,
        //     });
        // }

    });

    return (
        <NineSlicePlane
            image={ka}
            anchor={[200, 100]}
            pivot={[200, 100]}

            //   leftWidth={50}
            //   topHeight={30}
            //   rightWidth={60}
            //   bottomHeight={180}

            bottomHeight={0}
            width={20 + 100 * size.x}
            height={20 + 100 * size.y}
            x={testx}
            // y={150 - (50 * size.y)}
            y={test}

        />
    );
}

export default Scale;
