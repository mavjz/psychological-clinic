import React from "react";
import { WrapperType } from "types/sections/wrapper";

const WrapperElements = ({children}: WrapperType) => {
    return (
        <div className="wrapperElements">
            <div className="wrapperElements-child">
                {children}
            </div>
        </div>
    )
}

export default WrapperElements