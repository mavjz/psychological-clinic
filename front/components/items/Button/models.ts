import { HeadlineType } from '../Headline/models';

export type ButtonType = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    link?: string;
    isLink?: boolean;
    isImage?: boolean;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
} & HeadlineType;
