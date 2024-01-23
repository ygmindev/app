import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';
import { type ScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';

export type _WithScreenParamsModel = [
  (screen: ScreenModel) => Promise<void>,
  options: ScreenConfigModel,
];

export type _WithScreenModel = void;
