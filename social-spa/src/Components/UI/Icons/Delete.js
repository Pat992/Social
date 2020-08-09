import React, { useState } from 'react'
import classes from './Logos.module.css';

const Delete = () => {
    const [hover, setHover] = useState('#d72323')

    return (
        <div onMouseEnter={() => setHover('#f04545')} onMouseLeave={() => setHover('#d72323')} className={[classes.Logo, classes.Delete].join(' ')}>
            <svg width="100%" height="100%" viewBox="0 0 411 411" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRrule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1 }}>
                <g transform="matrix(1,0,0,1,1840,1310)">
                    <g id="delete-hover" transform="matrix(1,0,0,1,242,500)">
                        <path d="M-1877.81,-1606.05C-1799.81,-1683.1 -1721.32,-1759.64 -1721.32,-1759.64L-1876.35,-1604.6L-1721.32,-1449.56C-1721.32,-1449.56 -1799.81,-1526.1 -1877.81,-1603.15L-2031.39,-1449.56C-2031.39,-1453.37 -1955.81,-1529 -1879.28,-1604.6C-1955.81,-1680.2 -2031.39,-1755.84 -2031.39,-1759.64L-1877.81,-1606.05Z" style={{ fill: 'none', stroke: hover, strokeWidth: '100px' }} />
                    </g>
                </g>
            </svg >
        </div>
    )
}

export default Delete
