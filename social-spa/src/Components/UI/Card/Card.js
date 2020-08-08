import React from 'react'

const Card = (props) => {
    return (
        <section>
            {props.cardHeader}
            {props.cardBody}
        </section>
    )
}

export default Card
