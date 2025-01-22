import { Text } from '@lib/frontend/core/components/Text/Text';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type _TransPropsModel } from '@lib/frontend/locale/components/Trans/_Trans.models';
import { type ReactElement } from 'react';
import { Trans } from 'react-i18next';

export const _Trans = <TParams,>({
  components,
  i18nKey,
  ns,
  params,
  ...props
}: SFCPropsModel<_TransPropsModel<TParams>>): ReactElement<
  SFCPropsModel<_TransPropsModel<TParams>>
> => (
  <Trans
    {...props}
    components={components}
    i18nKey={i18nKey}
    ns={ns}
    parent={Text}
    values={params as object}
  />
);
