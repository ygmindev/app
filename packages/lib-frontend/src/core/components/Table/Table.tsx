// TODO: fix
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Skeleton } from '@lib/frontend/core/components/Skeleton/Skeleton';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import { _Table } from '@lib/frontend/core/components/Table/_Table';
import { TABLE_ROW_HEIGHT } from '@lib/frontend/core/components/Table/Table.constants';
import type { TablePropsModel } from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { ReactElement } from 'react';
import { useState } from 'react';

export const Table = <TType,>({
  columns,
  data,
  isLoading,
  forwardedRef,
  isFullWidth,
  rowHeight = TABLE_ROW_HEIGHT,
  onMount,
  isDisabled,
  onSelect,
  select,
  testID,
  ...props
}: SFCPropsModel<TablePropsModel<TType>>): ReactElement<SFCPropsModel<TablePropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  const [isMounted, setIsMounted] = useState<boolean>();

  return (
    <Wrapper
      grow
      isOverflowHidden
      style={styles}
      testID={testID}>
      <Appearable
        grow
        isActive={isMounted}
        isLazy={false}>
        <_Table<TType>
          columns={columns.map((column) => ({
            ...column,
            renderer:
              isMounted && isLoading && !column.pin
                ? () => (
                    <Skeleton
                      height={30}
                      isFullWidth>
                      <SvgShape
                        shape={SVG_SHAPE.RECT}
                        shapeProps={{ isFullWidth: true }}
                      />
                    </Skeleton>
                  )
                : column.renderer,
          }))}
          data={isLoading ? ([{}] as Array<TType>) : data}
          forwardedRef={forwardedRef}
          isDisabled={isLoading || isDisabled}
          isFullWidth={isFullWidth}
          onMount={() => {
            setIsMounted(true);
            onMount && onMount();
          }}
          onSelect={onSelect}
          rowHeight={rowHeight}
          select={select}
        />
      </Appearable>
    </Wrapper>
  );
};
