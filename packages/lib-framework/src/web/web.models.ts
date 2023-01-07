import type { ComponentType } from 'react';

export interface PageParamsModel {
  description?: string;
  html?: string;
  lang?: string;
  title?: string;
}

export interface PageContextModel<TType> {
  Component: ComponentType;
  pageParams: PageParamsModel;
  pageProps?: TType;
  pathname: string;
}
