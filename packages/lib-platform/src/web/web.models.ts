import { type ComponentType } from 'react';

export type PageParamsModel = {
  description?: string;
  html?: string;
  lang?: string;
  title?: string;
};

export type PageContextModel<TType> = {
  Component: ComponentType;
  pageParams: PageParamsModel;
  pageProps?: TType;
  pathname: string;
};
