import { type ScreenModel } from '@lib/shared/crawling/utils/Screen/Screen.models';

export type SignInParamsModel = {
  email?: string;
  isSnapshot?: boolean;
  screen: ScreenModel;
};

export type SignInModel = void;
