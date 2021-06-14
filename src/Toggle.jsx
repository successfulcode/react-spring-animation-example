import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {

    const [isToggled, setToggle] = useState(false);

    // const fade = useSpring({ opacity: isToggled ? 1 : 0 })

    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? 'green' : 'red',
        // fontSize: isToggled ? '30px' : '80px',
        transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
        background: isToggled ? 'blue' : 'green',
        width: isToggled ? '20%' : '80%',
        padding: isToggled ? '10px' : '100px',
        config: { precision: 0.005 }
    })

    useEffect(() => {
        setTimeout((() => setToggle(!isToggled)), 2000)
        // return () => {
        //     cleanup
        // }
    }, [isToggled])

    return (
        <div>
            <animated.h2 style={fade}>LABAS: {isToggled.toString()}</animated.h2>
            <button className='btn btn-primary' onClick={() => setToggle(!isToggled)}>TOGGLE</button>
        </div>
    )
};

export default Toggle;
