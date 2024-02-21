import { config as screenConfig } from '@lib/config/crawling/screen/screen';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { _withScreen } from '@lib/shared/crawling/utils/withScreen/_withScreen';
import {
  type WithScreenModel,
  type WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { APP_URI } from '@lib/shared/http/http.constants';

export const withScreen = async (
  ...[callback, options]: WithScreenParamsModel
): Promise<WithScreenModel> =>
  _withScreen(
    (screen) =>
      callback({
        ...screen,
        open: async (pathname) =>
          screen.open(pathname.startsWith('/') ? `${APP_URI}${trimPathname(pathname)}` : pathname),
      }),
    merge([options, screenConfig]),
  );
