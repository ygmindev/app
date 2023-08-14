import { type ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';

import { config } from '#lib-config/style/css/css.ag-grid';
import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Skeleton } from '#lib-frontend/animation/components/Skeleton/Skeleton';
import { _Table } from '#lib-frontend/core/components/Table/_Table';
import {
  type TableColumnModel,
  type TablePropsModel,
  type TableRefModel,
} from '#lib-frontend/core/components/Table/Table.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { GlobalStyle } from '#lib-frontend/style/components/GlobalStyle/GlobalStyle';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';

export const Table = forwardRef(
  <TType,>(
    {
      columns,
      data,
      elementState,
      isFullWidth,
      isVirtualized = true,
      onMount,
      onSelect,
      rowHeight,
      select,
      testID,
      ...props
    }: SFCPropsModel<TablePropsModel<TType>>,
    ref: ForwardedRef<TableRefModel>,
  ) => {
    const { styles } = useStyles({ props });
    const theme = useTheme();
    const [isMounted, isMountedSet] = useState<boolean>();
    const isLoading = elementState === ELEMENT_STATE.LOADING;

    return (
      <Wrapper
        grow
        isOverflowHidden
        style={styles}
        testID={testID}>
        <GlobalStyle sheet={config.stylesheet(theme)} />

        <Appearable
          grow
          isActive={isMounted}>
          <_Table
            columns={
              columns.map((column) => ({
                ...column,
                renderer:
                  isMounted && isLoading && !column.pin
                    ? () => <Skeleton height={30} />
                    : column.renderer,
              })) as Array<TableColumnModel<unknown, unknown>>
            }
            data={isLoading ? ([{}] as Array<TType>) : data}
            isFullWidth={isFullWidth}
            isVirtualized={isVirtualized}
            onMount={() => {
              isMountedSet(true);
              onMount && onMount();
            }}
            onSelect={onSelect}
            ref={ref}
            rowHeight={rowHeight ?? theme.font.lineHeight}
            select={select}
          />
        </Appearable>
      </Wrapper>
    );
  },
);
