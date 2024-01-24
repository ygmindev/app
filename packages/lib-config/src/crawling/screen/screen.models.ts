import { type SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type PuppeteerLaunchOptions } from 'puppeteer';

export type ScreenConfigModel = {
  delay: number;

  dimension: DimensionModel;

  isHeadless: boolean;

  timeout: number;
};

export type _ScreenConfigModel = PuppeteerLaunchOptions;

export type SelectorType = `${SELECTOR_TYPE}`;

export type SelectorPathModel = {
  value: string;
} & (
  | {
      key?: never;
      type?: SELECTOR_TYPE.ID | SELECTOR_TYPE.TEXT;
    }
  | {
      key: string;
      type?: SELECTOR_TYPE.DATA;
    }
);
