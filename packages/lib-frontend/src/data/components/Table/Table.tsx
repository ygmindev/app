import { type ReactElement } from 'react';

import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';
import { useTable } from '#lib-frontend/data/hooks/useTable/useTable';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_ALIGN } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Table = <TType,>({
  emptyElement,
  isFullWidth,
  isHeadless,
  ...props
}: LFCPropsModel<TablePropsModel<TType>>): ReactElement<LFCPropsModel<TablePropsModel<TType>>> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { headers, rows } = useTable(props);
  return rows?.length ? (
    <Wrapper
      {...wrapperProps}
      flex
      position={SHAPE_POSITION.RELATIVE}>
      {!isHeadless && (
        <Wrapper
          border={DIRECTION.BOTTOM}
          isFullWidth={isFullWidth}
          isRowAlign>
          {headers.map(({ align, id, label, width }) => (
            <Wrapper
              basis={width}
              isDistribute={!width}
              key={id}
              p={THEME_SIZE.SMALL}>
              <Text
                align={align}
                isEllipsis>
                {label}
              </Text>
            </Wrapper>
          ))}
        </Wrapper>
      )}

      <Wrapper
        grow
        isFullWidth={isFullWidth}>
        {rows.map((row) => (
          <Wrapper
            isRowAlign
            key={row.id}>
            {row.cells.map((cell) => (
              <Wrapper
                basis={cell.width}
                flex={cell.width ? undefined : 1}
                key={cell.id}
                p={THEME_SIZE.SMALL}>
                {cell.renderer ? (
                  cell.renderer({ row: row.value, value: cell.value })
                ) : (
                  <Text
                    align={cell.align}
                    isEllipsis>
                    {cell.value}
                  </Text>
                )}
              </Wrapper>
            ))}
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  ) : (
    emptyElement ?? (
      <Wrapper
        flex
        isCenter>
        <Text
          align={FONT_ALIGN.CENTER}
          colorRole={THEME_ROLE.MUTED}>
          {t('core:nothingToShow')}
        </Text>
      </Wrapper>
    )
  );
};
