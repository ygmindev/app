import cloneDeep from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';
import { cloneElement, type ReactElement } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';
import { useTable } from '#lib-frontend/data/hooks/useTable/useTable';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_ALIGN } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export const Table = <TType,>({
  emptyElement,
  isAddable,
  isDeletable,
  isFullWidth,
  isHeadless,
  nilString,
  onChange,
  ...props
}: LFCPropsModel<TablePropsModel<TType>>): ReactElement<LFCPropsModel<TablePropsModel<TType>>> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { headers, rows } = useTable(props);
  return rows?.length ? (
    <Wrapper
      {...wrapperProps}
      border
      flex
      isHorizontalScrollable
      isVerticalScrollable
      p
      position={SHAPE_POSITION.RELATIVE}
      round>
      {!isHeadless && (
        <Wrapper
          border={DIRECTION.BOTTOM}
          isFullWidth={isFullWidth}
          isRowAlign>
          {isDeletable && <Wrapper width={theme.shape.size[THEME_SIZE.MEDIUM]} />}

          {headers.map(({ align, id, label, width }) => (
            <Wrapper
              basis={width}
              isDistribute={!width}
              key={id}
              p={THEME_SIZE.SMALL}>
              <Text
                align={align}
                isBold
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
        {rows.map((row, i) => (
          <Wrapper
            isRowAlign
            key={row.id}>
            {isDeletable && (
              <Button
                color={THEME_COLOR.ERROR}
                icon="remove"
                onPress={
                  onChange
                    ? () => {
                        const newValue = cloneDeep(props.data);
                        newValue?.splice(i);
                        onChange(newValue);
                      }
                    : undefined
                }
                type={BUTTON_TYPE.INVISIBLE}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}
              />
            )}

            {row.cells.map((cell) => (
              <Wrapper
                basis={cell.width}
                flex={cell.width ? undefined : 1}
                key={cell.id}
                p={THEME_SIZE.SMALL}>
                {cell.renderer ? (
                  cell.renderer({ row: row.value, value: cell.value })
                ) : cell.field ? (
                  cloneElement(cell.field, {
                    label: cell.label,
                    onChange: onChange
                      ? <TKey extends StringKeyModel<TType>>(value: TType[TKey]) => {
                          const newValue = cloneDeep(props.data);
                          cell.columnId && newValue && (newValue[i][cell.columnId] = value);
                          onChange(newValue);
                        }
                      : undefined,
                    value: cell.value,
                  })
                ) : (
                  <Text
                    align={cell.align}
                    isEllipsis>
                    {isNil(cell.value) ? nilString : toString(cell.value)}
                  </Text>
                )}
              </Wrapper>
            ))}
          </Wrapper>
        ))}

        {isDeletable && (
          <Button
            color={THEME_COLOR.PRIMARY}
            icon="add"
            onPress={
              onChange
                ? () => {
                    const newValue = cloneDeep(props.data);
                    onChange(newValue);
                  }
                : undefined
            }
            type={BUTTON_TYPE.INVISIBLE}
            width={theme.shape.size[THEME_SIZE.MEDIUM]}
          />
        )}
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
