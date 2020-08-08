import React from 'react'

import classes from './Card.module.css';
import colors from '../../../colors.module.css';

const Card = (props) => {
    return (
        <section className={classes.Card}>
            <div className={[classes.Cardheader, colors.MainColor, colors.HighlightColorText].join(' ')}>
                {props.cardHeader}
            </div>
            <div className={classes.Cardbody}>
                {props.cardBody}
            </div>
        </section>
    )
}

export default Card
