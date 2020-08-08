import React, { useState } from 'react'
import classes from './Logos.module.css';

const Logout = () => {
    const [hover, setHover] = useState('#d72323')

    return (
        <div onMouseEnter={() => setHover('#f04545')} onMouseLeave={() => setHover('#d72323')} className={classes.Logo}>
            <svg width="100%" height="100%" viewBox="0 0 484 446" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLineJoin: 'round', strokeMiterlimit: 1 }}>
                <g transform="matrix(1,0,0,1,1077,1797)">
                    <g id="logout">
                        <g transform="matrix(0.816327,0,0,0.83875,-1460.96,-1041.87)">
                            <path d="M855,-528.323L855,-408.489L512,-408.489L512,-652.317L512,-408.489L855,-408.489L855,-528.323Z" style={{ fill: 'none', stroke: hover, strokeWidth: '79.77px' }} />
                        </g>
                        <g transform="matrix(0.816327,0,0,-0.83875,-1460.96,-2105.62)">
                            <path d="M855,-528.323L855,-408.489L512,-408.489L512,-652.317L512,-408.489L855,-408.489L855,-528.323Z" style={{ fill: 'none', stroke: hover, strokeWidth: '79.77px' }} />
                        </g>
                        <g transform="matrix(0.799845,0,0,0.984127,-184.543,-26.2381)">
                            <path d="M-922,-1571.75L-553,-1571.75L-634.029,-1648.93L-553,-1571.75L-636.192,-1498.55" style={{ fill: 'none', stroke: hover, strokeWidth: '73.62px' }} />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Logout