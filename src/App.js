import {
  Container, Stage,
  // Sprite, useTick
} from '@pixi/react';
import { useEffect, useState } from 'react';
// import ka from './assets/images/ka.png'
import './App.css';
import Welcome from './components/Welcome';


// import { useReducer, useRef } from 'react';

// import Snake from './components/Snacke';
// import Scale from './components/Scale';
// import bg from './assets/images/bg.jpg'

// const reducer = (_, { data }) => data;
// const Bunny = () => {
//   const [motion, update] = useReducer(reducer);
//   const iter = useRef(0);

//   useTick((delta) => {
//     const i = (iter.current += 0.05 * delta);

//     update({
//       type: 'update',
//       data: {
//         x: Math.sin(i) * 100,
//         y: Math.sin(i / 1.5) * 100,
//         rotation: Math.sin(i) * Math.PI,
//         anchor: Math.sin(i / 2),
//       },
//     });
//   });

//   return <Sprite image={ka} {...motion} />;
// };

function App() {

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

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

  return (
    <Stage width={width} height={height} >

      <Container x={0} y={0}>
        {/* <Snake /> */}
        {/* <Bunny /> */}
        {/* <Scale /> */}

        <Welcome />

      </Container>

    </Stage>
  );
}




export default App;
