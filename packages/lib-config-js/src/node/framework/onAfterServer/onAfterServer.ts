import { getLocaleStoreFromI18n } from '@lib/backend/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import { SSR_CONTEXT_KEYS } from '@lib/config/node/framework/framework.constants';
import { _onAfterServer } from '@lib/config/node/framework/onAfterServer/_onAfterServer';
import {
  type OnAfterServerModel,
  type OnAfterServerParamsModel,
} from '@lib/config/node/framework/onAfterServer/onAfterServer.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';
import { ROUTE } from '@lib/shared/route/route.constants';

export const onAfterServer = ({ routes }: OnAfterServerParamsModel): OnAfterServerModel =>
  _onAfterServer({
    render: async (params) => {
      const { context } = params;
      const i18n = context?.[LOCALE]?.i18n;
      const client = context?.[QUERY]?.client;
      const contextF: RootContextModel = merge([
        {
          [LOCALE]: i18n ? { store: await getLocaleStoreFromI18n({ i18n }) } : undefined,
          [QUERY]: { state: client?.state },
        },
        context,
      ]);
      params.context = pick(contextF, SSR_CONTEXT_KEYS);
      await client?.clear();
      params.redirectTo = params.context?.[ROUTE]?.redirectTo;
      params.routes = routes;
      return params;
    },
  });
