import React, { useState } from 'react'

import colors from '../../../../colors.module.css';
import classes from './Logos.module.css';

const Usergroup = () => {
    const [hover, setHover] = useState(false)
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={classes.Logo}>
            <svg width="100%" height="100%" viewBox="0 0 229 227" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLineJoin: 'round', strokeMiterlimit: 2 }}>
                <g transform="matrix(1,0,0,1,0,954)">
                    <g id="Usergroup" transform="matrix(4.24117,0,0,4.24117,-3153.31,-481.471)">
                        <g transform="matrix(0.567947,0,0,0.567947,-132.953,-381.935)">
                            <path d="M1596.25,519.17C1598.92,517.357 1602.14,516.298 1605.61,516.298L1621.39,516.298C1630.61,516.298 1638.09,523.781 1638.09,532.997L1638.09,549.697C1638.09,551.52 1627.07,553 1613.5,553L1613.5,541.25C1613.5,530.589 1606.15,521.632 1596.25,519.17ZM1613.5,484C1621.2,484 1627.45,490.249 1627.45,497.947C1627.45,505.644 1621.2,511.894 1613.5,511.894C1605.8,511.894 1599.55,505.644 1599.55,497.947C1599.55,490.249 1605.8,484 1613.5,484Z" className={!hover ? colors.secondaryColorSvg : colors.secondaryColorSvgHover} />
                        </g>
                        <g transform="matrix(0.567947,0,0,0.567947,-134.83,-380.684)">
                            <path d="M1546.5,541.25C1546.5,528.694 1556.69,518.5 1569.25,518.5L1590.75,518.5C1603.31,518.5 1613.5,528.694 1613.5,541.25L1613.5,564C1613.5,566.484 1598.49,568.5 1580,568.5C1561.51,568.5 1546.5,566.484 1546.5,564L1546.5,541.25ZM1580,474.5C1590.49,474.5 1599,483.014 1599,493.5C1599,503.986 1590.49,512.5 1580,512.5C1569.51,512.5 1561,503.986 1561,493.5C1561,483.014 1569.51,474.5 1580,474.5Z" className={!hover ? colors.secondaryColorSvg : colors.secondaryColorSvgHover} />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Usergroup
