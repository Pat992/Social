import React, { useState } from 'react'

import colors from '../../../colors.module.css';
import classes from './Logos.module.css';

const Messages = (props) => {
    const [hover, setHover] = useState(false)
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={classes.Logo} onClick={props.openMessages}>
            <svg width="100%" height="100%" viewBox="0 0 352 304" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLineJoin: 'round', strokeMiterlimit: 2 }}>
                <g transform="matrix(1,0,0,1,-1500,157)">
                    <g id="Message" transform="matrix(2.57495,0,0,2.57495,-2125.52,-1647.77)">
                        <path d="M1518.51,683L1434,683C1419.65,683 1408,671.35 1408,657L1408,605C1408,590.65 1419.65,579 1434,579L1518.51,579C1532.86,579 1544.51,590.65 1544.51,605L1544.51,657C1544.51,663.66 1542,669.738 1537.88,674.34L1544.06,696.656L1521.51,682.829C1520.53,682.942 1519.53,683 1518.51,683ZM1476.26,620.828C1482.33,620.828 1487.26,625.757 1487.26,631.828C1487.26,637.899 1482.33,642.828 1476.26,642.828C1470.19,642.828 1465.26,637.899 1465.26,631.828C1465.26,625.757 1470.19,620.828 1476.26,620.828ZM1441.89,620.828C1447.96,620.828 1452.89,625.757 1452.89,631.828C1452.89,637.899 1447.96,642.828 1441.89,642.828C1435.82,642.828 1430.89,637.899 1430.89,631.828C1430.89,625.757 1435.82,620.828 1441.89,620.828ZM1510.62,620.828C1516.69,620.828 1521.62,625.757 1521.62,631.828C1521.62,637.899 1516.69,642.828 1510.62,642.828C1504.55,642.828 1499.62,637.899 1499.62,631.828C1499.62,625.757 1504.55,620.828 1510.62,620.828Z" className={!hover ? colors.secondaryColorSvg : colors.secondaryColorSvgHover} />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Messages
