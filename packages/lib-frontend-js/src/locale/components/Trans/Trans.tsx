import { type ReactElement } from 'react';

import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { _Trans } from '@lib/frontend/locale/components/Trans/_Trans';
import { type _TransPropsModel } from '@lib/frontend/locale/components/Trans/_Trans.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const Trans = <TParams,>({
  components,
  i18nKey,
  ns,
  params,
  ...props
}: SFCPropsModel<_TransPropsModel<TParams>>): ReactElement<
  SFCPropsModel<_TransPropsModel<TParams>>
> => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  return (
    <_Trans
      components={components}
      i18nKey={i18nKey}
      ns={ns}
      params={params}
      style={styles}
    />
  );
};
