import { type ReactElement } from 'react';

import { _Table } from '#lib-frontend/core/components/Table/_Table';
import { type TablePropsModel } from '#lib-frontend/core/components/Table/Table.models';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const Table = <TType extends Record<string, unknown>>({
  testID,
  ...props
}: SFCPropsModel<TablePropsModel<TType>>): ReactElement<SFCPropsModel<TablePropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  return (
    <_Table<TType>
      style={styles}
      testID={testID}
      {...props}
    />
  );
};
