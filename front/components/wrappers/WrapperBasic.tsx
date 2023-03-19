import React from "react";
import { WrapperType } from "types/sections/wrapper";

const WrapperBasic = ({children}: WrapperType) => {
    return (
        <div className="wrapperbasic">
            <div className="wrapperbasic-child">
                {children}
            </div>
        </div>
    )
}

export default WrapperBasic