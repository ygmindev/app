import { type SelectorPathModel } from '@lib/config/crawling/screen/screen.models';
import { type UriModel } from '@lib/frontend/route/route.models';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';

export type WithScreenParamsModel = _WithScreenParamsModel[0];

export type WithScreenModel = _WithScreenModel;

export type ScreenModel = {
  close(): Promise<void>;

  goto(pathname: string): Promise<void>;

  press(params: {
    conditions?: Array<SelectorPathModel>;
    target: SelectorPathModel;
  }): Promise<void>;

  snapshot(): Promise<Buffer>;

  submit(): Promise<void>;

  type(params: {
    conditions?: Array<SelectorPathModel>;
    target: SelectorPathModel;
    value: string;
  }): Promise<void>;

  uri(): UriModel;

  waitForText(value?: string): Promise<void>;
};
