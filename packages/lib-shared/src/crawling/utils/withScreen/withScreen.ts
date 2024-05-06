import { config as screenConfig } from '@lib/config/crawling/screen/screen';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { _withScreen } from '@lib/shared/crawling/utils/withScreen/_withScreen';
import {
  type WithScreenModel,
  type WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/withScreen.models';

export const withScreen = async (
  ...[callback, options]: WithScreenParamsModel
): Promise<WithScreenModel> => {
  process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = 'true';
  return _withScreen(callback, merge([options, screenConfig]));
};
