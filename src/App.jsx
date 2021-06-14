import React from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';

const App = () => {

    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

    const mainStyle = { background: 'linear-gradient(0deg, rgba(110,78,115,1) 0%, rgba(255,255,255,1) 99%, rgba(255,255,255,1) 100%)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }

    return (
        <div style={mainStyle} >
            <animated.div className='container' style={fade}>

                <main>
                    <Toggle />
                </main>

            </animated.div>
        </div>
    )
};

export default App;