import { internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.web';
import { type onBeforeClientModel } from '@lib/config/node/framework/framework.models';
import { cookies } from '@lib/frontend/http/utils/cookies/cookies';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';

export const onBeforeClient: onBeforeClientModel = async (params) => {
  const { context } = params;
  params.context = merge([
    {
      [LOCALE]: { i18n: context?.[LOCALE]?.i18n ?? internationalizeConfig.config() },
      [STATE]: { cookies },
    },
    context,
  ]);
  return params;
};
