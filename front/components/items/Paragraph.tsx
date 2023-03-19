import React from 'react'
import { ParagraphType } from 'types/items/paragraph'

const Paragraph = ({small, medium, big, text, place="left", color="green"}: ParagraphType) => {
    color = "text".concat(color.toLowerCase());
    place = "text".concat(place.toLowerCase());
    const classes = color.concat(" "+place);
    return (
        <React.Fragment>
            {small &&
                <p className={`paragraph-small ${classes}`}>{text}</p>
            }
            {medium &&
                <p className={`paragraph-medium ${classes}`}>{text}</p>
            }
            {big &&
                <p className={`paragraph-big ${classes}`}>{text}</p>
            }
        </React.Fragment>
    )
}

export default Paragraph