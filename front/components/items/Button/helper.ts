import { HeadlineType } from "../Headline/helper";

export type ButtonType = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    image?: string;
    link?: string;
    isLink?: boolean;
    isImage?: boolean;
    className?: string;
} & HeadlineType;
