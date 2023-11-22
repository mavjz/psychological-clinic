import { ArticleType } from '../Article/models';

export type BenefitsInDetailType = {
    isCouple?: boolean;
    isLoupe?: boolean;
    isAnalized?: boolean;
    isPerson?: boolean;
    isLove?: boolean;
    isLovePrice?: boolean;
} & ArticleType;
