import { config as internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.web';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { type CookiesModel } from '@lib/frontend/state/state.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';
import Cookies from 'cookies-js';

export const onBeforeClient = async (
  params: FrameworkRenderParamsModel,
): Promise<FrameworkRenderParamsModel> => {
  const { context } = params;
  params.context = merge([
    {
      [LOCALE]: {
        i18n: context?.[LOCALE]?.i18n ?? internationalizeConfig.config(),
      },
      [STATE]: { cookies: Cookies as unknown as CookiesModel },
    },
    context,
  ]);
  return params;
};
