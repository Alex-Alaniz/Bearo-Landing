export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  imageType: 'payments' | 'card' | 'investing';
  align?: 'left' | 'right';
  theme?: 'green' | 'black' | 'white';
}

export enum IconType {
  DOLLAR = 'DOLLAR',
  BITCOIN = 'BITCOIN',
  CARD = 'CARD',
  ARROW_UP = 'ARROW_UP',
  ZAP = 'ZAP',
  SEND = 'SEND'
}