import { ArticleType } from "../Article/helper";

export type BenefitsInDetailType = {
    isCouple?: boolean;
    isLoupe?: boolean;
    isAnalized?: boolean;
    isPerson?: boolean;
    isLove?: boolean;
    isLovePrice?: boolean;
} & ArticleType;