import { ArticleType } from '../Article/models';

export type CEOProfileType = {
    photo: string;
    headline: string;
} & ArticleType;
