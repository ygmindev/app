import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type RequiredModel } from '@lib/shared/core/core.models';
import { type LaunchOptions } from 'puppeteer';

export type ScreenConfigModel = {
  delay: number;

  dimension: RequiredModel<DimensionModel>;

  elementTimeout: number;

  isHeadless: boolean;

  isIgnoreMedia: boolean;

  navigationTimeout: number;

  proxies?: Array<ProxyModel>;

  rootUri?: string;

  snapshotPath?: string;
};

export type _ScreenConfigModel = LaunchOptions;

export type ProxyModel = {
  password: string;
  url: string;
  username: string;
};
