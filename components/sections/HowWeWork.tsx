import Profile from "components/items/Profile";
import React from "react";
import Article from "./Article";

const HowWeWork = ({isLeft, isRight, image, name, texts}) => {
    return (
        <React.Fragment>
            {isLeft ? 
                <div className="howwework">
                    <Profile
                        isBig
                        image={image}
                        name={name}
                    />
                    <Article
                        headline="Plan"
                        texts={texts}
                    />
                </div>
            :null}
            {isRight ? 
                <div className="howwework">
                    <Article
                        headline="Plan"
                        texts={texts}
                    />
                    <Profile
                        isBig
                        image={image}
                        name={name}
                    />
                </div>
            :null}
        </React.Fragment>
    )
}

export default HowWeWork