import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type RequiredModel } from '@lib/shared/core/core.models';
import { type PuppeteerLaunchOptions } from 'puppeteer';

export type ScreenConfigModel = {
  delay: number;

  delayDefault: number;

  dimension: RequiredModel<DimensionModel>;

  isHeadless: boolean;

  snapshotPath: string;

  snapshotPrefix: string;

  timeout: number;
};

export type _ScreenConfigModel = PuppeteerLaunchOptions;
