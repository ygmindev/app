import { type ScreenModel } from '@lib/shared/crawling/utils/Screen/Screen.models';

export type SignInParamsModel = {
  dirname?: string;
  email?: string;
  isSnapshot?: boolean;
  screen: ScreenModel;
};

export type SignInModel = void;
