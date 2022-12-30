import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _Trans } from '@lib/frontend/locale/components/Trans/_Trans';
import type { _TransPropsModel } from '@lib/frontend/locale/components/Trans/_Trans.models';
import type { TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const Trans = composeComponent<TransPropsModel<unknown>, _TransPropsModel<unknown>>({
  getComponent: () => _Trans,

  getProps: ({ Components, i18nKey, ns, params }) => ({
    Components,
    i18nKey,
    ns,
    params,
  }),

  stylers: [textStyler],
});
