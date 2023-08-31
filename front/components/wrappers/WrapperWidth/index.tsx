import React from 'react';
import { WrapperType } from 'types/wrapper';

const WrapperWidth = ({ children }: WrapperType) => {
    return (
        <div className="wrapperwidth">
            <div className="wrapperwidth-child">{children}</div>
        </div>
    );
};

export default WrapperWidth;