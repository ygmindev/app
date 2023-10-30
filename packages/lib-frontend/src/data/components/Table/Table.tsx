import cloneDeep from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';
import {
  cloneElement,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  useImperativeHandle,
  useState,
} from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type RLFCPropsModel } from '#lib-frontend/core/core.models';
import { TABLE_CELL_WIDTH_DEFAULT } from '#lib-frontend/data/components/Table/Table.constants';
import {
  type TablePropsModel,
  type TableRefModel,
} from '#lib-frontend/data/components/Table/Table.models';
import { type FormErrorModel } from '#lib-frontend/data/data.models';
import { useTable } from '#lib-frontend/data/hooks/useTable/useTable';
import { useValidator } from '#lib-frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { getValue } from '#lib-shared/core/utils/getValue/getValue';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';

export const Table = forwardRef(
  <TType,>(
    {
      emptyElement,
      isAddable,
      isDeletable,
      isFullWidth,
      isHeadless,
      nilString,
      onChange,
      validators,
      ...props
    }: RLFCPropsModel<TableRefModel, TablePropsModel<TType>>,
    ref: ForwardedRef<TableRefModel>,
  ): ReactElement<RLFCPropsModel<TableRefModel, TablePropsModel<TType>>> => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { wrapperProps } = useLayoutStyles({ props });
    const { headers, rows } = useTable(props);
    const validate = useValidator();

    const [errors, errorsSet] = useState<Record<string, FormErrorModel<TType>>>();

    useImperativeHandle(ref, () => ({
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

    return rows?.length ? (
      <Wrapper
        {...wrapperProps}
        align={FLEX_ALIGN.START}
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
                key={id}
                width={width || TABLE_CELL_WIDTH_DEFAULT}>
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
          isFullWidth={isFullWidth}
          s={THEME_SIZE.SMALL}>
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
                          newValue?.splice(i, 1);
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
                  key={cell.id}
                  width={cell.width || TABLE_CELL_WIDTH_DEFAULT}>
                  {cell.renderer ? (
                    cell.renderer({ row: row.value, value: cell.value })
                  ) : cell.field ? (
                    cloneElement(cell.field({ row: row.value, value: cell.value }), {
                      error:
                        row.id && cell.columnId && getValue(errors, `${row.id}.${cell.columnId}`),
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

          {isAddable && (
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
  },
) as <TType>(
  props: RLFCPropsModel<TableRefModel, TablePropsModel<TType>>,
) => ReactElement<RLFCPropsModel<TableRefModel, TablePropsModel<TType>>>;
