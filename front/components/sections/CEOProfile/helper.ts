import { ArticleType } from "../Article/helper";

export type CEOProfileType = {
    photo: string;
    headline: string;
} & ArticleType;