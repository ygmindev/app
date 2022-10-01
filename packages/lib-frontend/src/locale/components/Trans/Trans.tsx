import { _Trans } from '@lib/frontend/locale/components/Trans/_Trans';
import type { TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { textStyler } from '@lib/frontend/styling/utils/styler/textStyler/textStyler';
import type { ReactElement } from 'react';

export const Trans = <TParams,>({
  Components,
  i18nKey,
  ns,
  params,
  testID,
  ...props
}: TransPropsModel<TParams>): ReactElement<TransPropsModel<TParams>> => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  return (
    <_Trans
      Components={Components}
      i18nKey={i18nKey}
      ns={ns}
      params={params}
      style={styles}
      testID={testID}
    />
  );
};
