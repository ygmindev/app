import { type FileConfigModel } from '@lib/config/file/file.models';
import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type LaunchOptions } from 'puppeteer';

export type ScreenConfigModel = Pick<FileConfigModel, 'imageExtension' | 'videoExtension'> & {
  delay: number;

  dimension: Required<DimensionModel>;

  dirname?: string;

  elementTimeout: number;

  isHeadless: boolean;

  isIgnoreMedia: boolean;

  navigationTimeout: number;

  proxies?: Array<ProxyModel>;

  retry?: number;

  rootUri?: string;

  snapshotPath?: string;
};

export type _ScreenConfigModel = LaunchOptions;

export type ProxyModel = {
  password: string;
  url: string;
  username: string;
};
