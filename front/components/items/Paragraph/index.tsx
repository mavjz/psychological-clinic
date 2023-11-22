import React from 'react';
import { ParagraphType } from './models';

const Paragraph = ({ size, text, placeClass = 'left', colorClass = 'green' }: ParagraphType) => {
    colorClass = 'text'.concat(colorClass.toLowerCase());
    placeClass = 'text'.concat(placeClass.toLowerCase());
    const classes = colorClass.concat(' ' + placeClass);
    return (
        <React.Fragment>
            <p className={`paragraph-${size} ${classes}`}>{text}</p>
        </React.Fragment>
    );
};

export default Paragraph;
