// TODO: fix
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Skeleton } from '@lib/frontend/core/components/Skeleton/Skeleton';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import { _Table } from '@lib/frontend/core/components/Table/_Table';
import { TABLE_ROW_HEIGHT } from '@lib/frontend/core/components/Table/Table.constants';
import type {
  TablePropsModel,
  TableRefModel,
} from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';

export const Table = forwardRef(
  <TType,>(
    {
      columns,
      data,
      isFullWidth,
      elementState,
      rowHeight = TABLE_ROW_HEIGHT,
      onMount,
      onSelect,
      select,
      testID,
      ...props
    }: SFCPropsModel<TablePropsModel<TType>>,
    ref: ForwardedRef<TableRefModel>,
  ) => {
    const { styles } = useStyles({ props });
    const [isMounted, setIsMounted] = useState<boolean>();
    const _isLoading = elementState === ELEMENT_STATE.LOADING;
    return (
      <Wrapper
        grow
        isOverflowHidden
        style={styles}
        testID={testID}>
        <Appearable
          grow
          isVisible={isMounted}>
          <_Table<TType>
            columns={columns.map((column) => ({
              ...column,
              renderer:
                isMounted && _isLoading && !column.pin
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
            data={_isLoading ? ([{}] as Array<TType>) : data}
            isFullWidth={isFullWidth}
            onMount={() => {
              setIsMounted(true);
              onMount && onMount();
            }}
            onSelect={onSelect}
            ref={ref}
            rowHeight={rowHeight}
            select={select}
          />
        </Appearable>
      </Wrapper>
    );
  },
);
