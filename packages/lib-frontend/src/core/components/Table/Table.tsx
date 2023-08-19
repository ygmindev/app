import { type ReactElement } from 'react';

import { _Table } from '#lib-frontend/core/components/Table/_Table';
import { type TablePropsModel } from '#lib-frontend/core/components/Table/Table.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const Table = <TType extends Record<string, unknown>>({
  testID,
  ...props
}: SFCPropsModel<TablePropsModel<TType>>): ReactElement<SFCPropsModel<TablePropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <_Table<TType> {...props} />
    </Wrapper>
  );
};
