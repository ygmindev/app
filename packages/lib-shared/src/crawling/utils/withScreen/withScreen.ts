import { config as screenConfig } from '@lib/config/crawling/screen/screen';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { _withScreen } from '@lib/shared/crawling/utils/withScreen/_withScreen';
import {
  type WithScreenModel,
  type WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/withScreen.models';

export const withScreen = async (
  ...[callback, options]: WithScreenParamsModel
): Promise<WithScreenModel> =>
  _withScreen(
    (screen) =>
      callback({
        ...screen,
        open: async (pathname) => screen.open(trimPathname(pathname)),
      }),
    merge([options, screenConfig]),
  );
