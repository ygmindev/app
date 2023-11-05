import { type UriModel } from '#lib-frontend/route/route.models';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '#lib-frontend/test/utils/withScreen/_withScreen.models';

export type WithScreenParamsModel = _WithScreenParamsModel;

export type WithScreenModel = _WithScreenModel;

export type ScreenModel = {
  close(): Promise<void>;

  goto(params: string): Promise<void>;

  press(params: string): Promise<void>;

  snapshot(params?: { match?: boolean }): Promise<void>;

  type(testID: string, value?: string): Promise<void>;

  uri(): UriModel;

  waitForText(value?: string): Promise<void>;
};
