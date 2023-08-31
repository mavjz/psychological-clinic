import React from 'react';
import { WrapperType } from 'types/wrapper';

const WrapperColumn = ({ children }: WrapperType) => {
    return (
        <div className="wrapperColumn">
            <div className="wrapperColumn-child">{children}</div>
        </div>
    );
};

export default WrapperColumn;
