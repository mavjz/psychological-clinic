import Image from "next/image";
import React from "react";
import { ProfileType } from "types/items/profile";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

const Profile = ({image, name, text}: ProfileType) => {
    return (
        <div className="profile">
            <div className="profile-placeholder">
                <Image
                    src={image}
                    alt="Terapeuta"
                    fill
                    className="profile-placeholder__image"
                />
            </div>
            <div className="profile-hover">
                <div className="profile-hover__text">
                    <Headline
                        text={name}
                        h3
                        place="textcenter"
                        color="textwhite"
                    />
                    <Paragraph
                        text={text || ""}
                        small
                        color="textwhite"
                        place="textcenter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile