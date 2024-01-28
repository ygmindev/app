import { type SelectorPathModel } from '@lib/config/crawling/screen/screen.models';
import { type UriModel } from '@lib/frontend/route/route.models';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import { type KEY_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';

export type WithScreenParamsModel = _WithScreenParamsModel[0];

export type WithScreenModel = _WithScreenModel;

export type ScreenModel = {
  close(): Promise<void>;

  getValue(params: {
    conditions?: Array<SelectorPathModel>;
    index?: number;
    isDelay?: boolean;
    parent?: SelectorPathModel;
    target: SelectorPathModel;
  }): Promise<string>;

  goto(pathname: string): Promise<void>;

  key(params: { isDelay?: boolean; value: KeyTypeModel }): Promise<void>;

  press(params: {
    conditions?: Array<SelectorPathModel>;
    index?: number;
    isDelay?: boolean;
    parent?: SelectorPathModel;
    target: SelectorPathModel;
  }): Promise<void>;

  snapshot(): Promise<Buffer>;

  type(params: {
    conditions?: Array<SelectorPathModel>;
    index?: number;
    isDelay?: boolean;
    parent?: SelectorPathModel;
    target: SelectorPathModel;
    value: string;
  }): Promise<void>;

  uri(): UriModel;

  waitFor(params: {
    conditions?: Array<SelectorPathModel>;
    target: SelectorPathModel;
  }): Promise<void>;

  waitForText(value?: string): Promise<void>;
};

export type KeyTypeModel = `${KEY_TYPE}`;
