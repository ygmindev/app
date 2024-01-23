import { type ScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';

export type SignInParamsModel = {
  isSnapshot?: boolean;
  screen: ScreenModel;
};

export type SignInModel = void;
