import { Text } from '@lib/frontend/core/components/Text/Text';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _TransPropsModel } from '@lib/frontend/locale/components/Trans/_Trans.models';
import type { CSSProperties } from 'react';
import type { TransProps } from 'react-i18next';
import { Trans } from 'react-i18next';

export const _Trans = composeComponent<_TransPropsModel<unknown>, TransProps<string, string>>({
  Component: Trans,
  getProps: ({ Components, i18nKey, ns, params, style, ...props }) => ({
    ...props,
    components: Components,
    i18nKey,
    ns,
    parent: Text,
    style: style as CSSProperties,
    values: params as object,
  }),
});
