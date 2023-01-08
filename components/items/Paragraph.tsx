import React from 'react'
import { ParagraphType } from 'types/items/paragraph'

const Paragraph = ({small, medium, big, text, place="textleft", color="textgreen"}: ParagraphType) => {
    return (
        <React.Fragment>
            {small &&
                <p className={`paragraph-small ${place} ${color}`}>{text}</p>
            }
            {medium &&
                <p className={`paragraph-medium ${place} ${color}`}>{text}</p>
            }
            {big &&
                <p className={`paragraph-big ${place} ${color}`}>{text}</p>
            }
        </React.Fragment>
    )
}

export default Paragraph