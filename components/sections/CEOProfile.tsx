import WrapperWidth from "components/wrappers/Wrapperwidth";
import Image from "next/image";
import React from "react";
import { ArticleType } from "types/sections/article";
import Article from "./Article";

const CEOProfile = ({photo, headline, texts}: CEOProfileType) => {
    return (
        <WrapperWidth>
            <div className="CEOProfile">
                <div className="CEOProfile-placeholder">
                    <Image
                        src={photo}
                        alt="Terapeuta"
                        fill
                        className="CEOProfile-placeholder__image"
                    />
                </div>
                <Article
                    headline={headline}
                    texts={texts}
                />
            </div>
        </WrapperWidth>
    )
}

export default CEOProfile

type CEOProfileType = {
    photo: string,
    headline: string,
} & ArticleType