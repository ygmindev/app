import type { ComponentType } from 'react';

export interface PageParamsModel {
  description?: string;
  html?: string;
  lang?: string;
  title?: string;
}

export interface PageContextModel {
  Component: ComponentType;
  pageParams: PageParamsModel;
  pathname: string;
  routeParams: Record<string, string>;
}
