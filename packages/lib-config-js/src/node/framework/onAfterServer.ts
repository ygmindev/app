import { getLocaleStoreFromI18n } from '@lib/backend/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';

export const onAfterServer = async (
  params: FrameworkRenderParamsModel,
): Promise<FrameworkRenderParamsModel> => {
  const { context } = params;

  const i18n = context?.[LOCALE]?.i18n;
  const client = context?.[QUERY]?.client;
  const contextF: RootContextModel = merge([
    {
      [LOCALE]: i18n ? { store: getLocaleStoreFromI18n({ i18n }) } : undefined,
      [QUERY]: { state: client?.state },
    },
    context,
  ]);

  params.context = pick(contextF, WEB_CONFIG.ssrContextKeys);

  await client?.clear();

  return params;
};

//   enableEagerStreaming: true,
//   redirectTo: pageContext[ROUTE]?.redirectTo,
