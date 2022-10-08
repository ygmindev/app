import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { _Table } from '@lib/frontend/core/components/Table/_Table';
import type { TablePropsModel } from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import type { ReactElement } from 'react';
import { useState } from 'react';

export const Table = <TType,>({
  columns,
  data,
  forwardedRef,
  isFullWidth,
  onMount,
  onSelect,
  select,
  testID,
  ...props
}: TablePropsModel<TType>): ReactElement<TablePropsModel<TType>> => {
  const { styles } = useStyles({ props });
  const [isMounted, setIsMounted] = useState<boolean>(false);
  return (
    <Wrapper
      grow
      isOverflowHidden
      style={styles}
      testID={testID}>
      <Appear
        grow
        isVisible={isMounted}>
        <_Table
          columns={columns}
          data={data}
          forwardedRef={forwardedRef}
          isFullWidth={isFullWidth}
          onMount={() => {
            setIsMounted(true);
            onMount && onMount();
          }}
          onSelect={onSelect}
          select={select}
        />
      </Appear>
    </Wrapper>
  );
};
