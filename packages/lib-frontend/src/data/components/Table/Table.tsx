import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { TABLE_CELL_WIDTH_DEFAULT } from '@lib/frontend/data/components/Table/Table.constants';
import {
  type TablePropsModel,
  type TableRefModel,
} from '@lib/frontend/data/components/Table/Table.models';
import { type FormErrorModel } from '@lib/frontend/data/data.models';
import { useTable } from '@lib/frontend/data/hooks/useTable/useTable';
import { useValidator } from '@lib/frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import cloneDeep from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import {
  cloneElement,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  useImperativeHandle,
  useState,
} from 'react';

export const Table = forwardRef(
  <TType,>(
    {
      columns,
      data,
      elementState,
      emptyCell = '-',
      emptyElement,
      isFullWidth = true,
      isHeadless,
      isRemovable,
      onChange,
      onRemove,
      onSelect,
      select,
      validators,
      ...props
    }: RLFCPropsModel<TableRefModel, TablePropsModel<TType>>,
    ref: ForwardedRef<TableRefModel>,
  ): ReactElement<RLFCPropsModel<TableRefModel, TablePropsModel<TType>>> => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { wrapperProps } = useLayoutStyles({ props });
    const { headers, rows } = useTable({
      columns,
      data,
      isFullWidth,
      onSelect,
      select,
    });
    const validate = useValidator();
    const [errors, errorsSet] = useState<Record<string, FormErrorModel<TType>>>();

    useImperativeHandle(ref, () => ({
      remove: handleRemove,
      validate: () => {
        if (rows && validators) {
          const errorsF = rows.reduce((result, row) => {
            const rowErrors = validate({ data: row.value, validators });
            return rowErrors ? { ...result, [row.id]: rowErrors } : result;
          }, {});
          errorsSet(errorsF);
          return isEmpty(errorsF);
        }
        return true;
      },
    }));

    const handleRemove = onChange
      ? (i: number) => {
          if (onRemove) {
            const row = data?.[i];
            row && void onRemove(row);
          } else {
            const newValue = cloneDeep(data);
            newValue?.splice(i, 1);
            onChange(newValue);
          }
        }
      : undefined;

    console.warn(rows);

    return rows?.length ? (
      <Wrapper
        {...wrapperProps}
        border
        flex
        isFullWidth
        isHorizontalScrollable
        p
        position={SHAPE_POSITION.RELATIVE}
        round>
        {!isHeadless && (
          <Wrapper
            isAlign
            isFullWidth={isFullWidth}
            isRow>
            {isRemovable && <Wrapper width={theme.shape.size[THEME_SIZE.MEDIUM]} />}

            {headers.map(
              ({ align, id, isHidden, label, width }) =>
                !isHidden && (
                  <Wrapper
                    key={id}
                    pVertical={THEME_SIZE.SMALL}
                    width={width || TABLE_CELL_WIDTH_DEFAULT}>
                    <Text
                      align={align}
                      isBold
                      isEllipsis>
                      {label}
                    </Text>
                  </Wrapper>
                ),
            )}
          </Wrapper>
        )}

        <Wrapper
          flex
          isFullWidth={isFullWidth}
          isVerticalScrollable>
          {rows.map((row, i) => (
            <Wrapper
              border={DIRECTION.TOP}
              borderColor={theme.color.border}
              isAlign
              isRow
              key={row.id}
              minHeight={theme.shape.size[THEME_SIZE_MORE.XSMALL]}
              pVertical={THEME_SIZE.SMALL}>
              {isRemovable && (
                <Button
                  color={THEME_COLOR.ERROR}
                  confirmMessage={t('core:confirmRemove')}
                  icon="trash"
                  onPress={() => handleRemove && handleRemove(i)}
                  type={BUTTON_TYPE.INVISIBLE}
                  width={theme.shape.size[THEME_SIZE.MEDIUM]}
                />
              )}

              {row.cells.map((cell) => {
                if (cell.isHidden) {
                  return null;
                }
                let element: ReactElement | null = null;
                if (cell.renderer) {
                  element = cell.renderer({ index: i, row: row.value, value: cell.value });
                } else if (cell.field) {
                  const field = cell.field({ index: i, row: row.value, value: cell.value });
                  const onChangeF = field?.props.onChange;
                  element = cloneElement(field, {
                    error:
                      row.id && cell.columnId && getValue(errors, `${row.id}.${cell.columnId}`),
                    onChange: onChange
                      ? <TKey extends StringKeyModel<TType>>(value: TType[TKey]) => {
                          const newValue = cloneDeep(data);
                          cell.columnId && newValue && (newValue[i][cell.columnId] = value);
                          onChange(newValue);
                          onChangeF && onChangeF(value);
                        }
                      : onChangeF,
                    value: cell.value,
                  });
                } else {
                  element = (
                    <AsyncText
                      align={cell.align}
                      isEllipsis>
                      {isNil(cell.value) ? emptyCell : stringify(cell.value)}
                    </AsyncText>
                  );
                }

                return (
                  <Skeleton
                    elementState={elementState}
                    key={cell.id}
                    width={cell.width || TABLE_CELL_WIDTH_DEFAULT}>
                    {element}
                  </Skeleton>
                );
              })}
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
  },
) as <TType>(
  props: RLFCPropsModel<TableRefModel, TablePropsModel<TType>>,
) => ReactElement<RLFCPropsModel<TableRefModel, TablePropsModel<TType>>>;
