import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type PuppeteerLaunchOptions } from 'puppeteer';

export type ScreenConfigModel = {
  dimension: DimensionModel;

  idSelector(id: string): string;

  isHeadless: boolean;

  timeout: number;
};

export type _ScreenConfigModel = PuppeteerLaunchOptions;
