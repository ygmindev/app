import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type PuppeteerLaunchOptions } from 'puppeteer';

export type ScreenConfigModel = {
  dimension: DimensionModel;

  idSelector(params: SelectorModel): string;

  isHeadless: boolean;

  timeout: number;
};

export type _ScreenConfigModel = PuppeteerLaunchOptions;

export type SelectorModel = {
  key?: string;
  paths?: Array<string>;
  value: string;
};
