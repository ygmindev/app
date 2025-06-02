import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { type VirtualizedListRefModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type PositionModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import {
  TABLE_CELL_WIDTH_DEFAULT,
  TABLE_COMPONENT_ID_FROZEN_ROWS_LIST,
  TABLE_COMPONENT_ID_HEADERS_WRAPPER,
  TABLE_COMPONENT_ID_ROWS_LIST,
  TABLE_COMPONENT_ID_ROWS_WRAPPER,
} from '@lib/frontend/data/components/Table/Table.constants';
import {
  type TablePropsModel,
  type TableRefModel,
} from '@lib/frontend/data/components/Table/Table.models';
import { type FormErrorModel } from '@lib/frontend/data/data.models';
import { useTable } from '@lib/frontend/data/hooks/useTable/useTable';
import { TABLE_SELECT_TYPE } from '@lib/frontend/data/hooks/useTable/useTable.constants';
import {
  type TableHeaderModel,
  type TableRowModel,
  type TableSortModel,
} from '@lib/frontend/data/hooks/useTable/useTable.models';
import { useValidator } from '@lib/frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { updateArray } from '@lib/shared/core/utils/updateArray/updateArray';
import cloneDeep from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import partition from 'lodash/partition';
import remove from 'lodash/remove';
import {
  cloneElement,
  type ReactElement,
  type ReactNode,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

export const Table = <TType,>({
  columns,
  data,
  elementState,
  emptyCell = '-',
  emptyElement,
  idField,
  isFullWidth = true,
  isHeadless,
  isRemovable,
  onChange,
  onRemove,
  onSelect,
  ref,
  select,
  sorting,
  validators,
  ...props
}: RLFCPropsModel<TableRefModel<TType>, TablePropsModel<TType>>): ReactElement<
  RLFCPropsModel<TableRefModel<TType>, TablePropsModel<TType>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const [selected, selectedSet] = useState<Record<string, true>>({});

  const isScrolling = useRef<boolean>(false);
  const headersWrapperRef = useRef<WrapperRefModel>(null);
  const rowsListRef = useRef<VirtualizedListRefModel>(null);
  const rowsListFrozenRef = useRef<VirtualizedListRefModel>(null);
  const rowsWrapperRef = useRef<WrapperRefModel>(null);

  const columnsF = useMemo<TablePropsModel<TType>['columns']>(
    () =>
      filterNil([
        ...(columns ?? []),

        isRemovable && {
          id: 'remove' as StringKeyModel<TType>,
          isFilterDisabled: false,
          isFrozen: true,
          label: '',
          renderer: ({ index }) => (
            <Button
              color={THEME_COLOR.ERROR}
              confirmMessage={t('core:confirmRemove')}
              icon="trash"
              onPress={() => handleRemove && handleRemove(index)}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />
          ),
          width: theme.shape.size[THEME_SIZE.SMALL],
        },

        select && {
          id: 'select' as StringKeyModel<TType>,
          isFilterDisabled: false,
          isFrozen: true,
          label: '',
          renderer: ({ id }) => (
            <CheckboxInput
              isCenter
              onChange={(v) => {
                if (select === TABLE_SELECT_TYPE.SINGLE) {
                  selectedSet({ [id]: true });
                } else {
                  const selectedNew = cloneDeep(selected);
                  if (v) {
                    selectedNew[id] = true;
                  } else {
                    delete selectedNew[id];
                  }
                  selectedSet(selectedNew);
                  onSelect && onSelect(data?.filter((row) => selectedNew[row[idField] as string]));
                }
              }}
              value={selected[id] ?? false}
            />
          ),
          width: theme.shape.size[THEME_SIZE.SMALL],
        },
      ]),
    [columns, isRemovable, select, selected],
  );

  const dataF = useMemo(
    () =>
      [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10' },
        { id: '11' },
        { id: '12' },
      ].map((x) => ({ _id: x.id, email: `${x.id}@email.com`, id: x.id })) as Array<TType>,
    [],
  );

  const [sortingF, sortingSet] = useState<Array<TableSortModel<TType>>>(sorting ?? []);
  const { headers, rows } = useTable({
    columns: columnsF,
    data: dataF,
    // data,
    idField,
    sorting: sortingF,
  });
  const validate = useValidator();
  const [errors, errorsSet] = useState<Record<string, FormErrorModel<TType>>>();

  useImperativeHandle(ref, () => ({
    remove: handleRemove,
    select: () => selectedSet({}),
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
        const newValue = cloneDeep(data);
        if (onRemove) {
          const row = newValue?.[i];
          row && void onRemove(row);
        }
        newValue?.splice(i, 1);
        onChange(newValue);
      }
    : undefined;

  const [headersFrozen, headersUnfrozen] = useMemo<
    [Array<TableHeaderModel<TType>>, Array<TableHeaderModel<TType>>]
  >(() => partition(headers, (v) => v.isFrozen), [headers]);

  const renderHeader = ({
    align,
    headerRenderer,
    id,
    isHidden,
    label,
    width,
  }: TableHeaderModel<TType>): ReactNode => {
    if (isHidden) {
      return null;
    }
    const sortIndex = sortingF.findIndex((v) => v.id === id);
    const isSorted = sortIndex >= 0 && !!sortingF[sortIndex];
    return (
      <Wrapper
        height={theme.shape.size[THEME_SIZE.SMALL]}
        isAlign
        isRow
        key={id}
        onPress={() =>
          sortingSet(
            isSorted
              ? sortingF[sortIndex]?.isDescending
                ? remove(sortingF, sortIndex)
                : updateArray(sortingF, sortIndex, (v) =>
                    v ? { ...v, isDescending: !v.isDescending } : undefined,
                  )
              : [{ id }],
          )
        }
        position={SHAPE_POSITION.RELATIVE}
        width={width || TABLE_CELL_WIDTH_DEFAULT}>
        {headerRenderer ? (
          headerRenderer()
        ) : (
          <Text
            align={align}
            isBold
            isEllipsis>
            {label}
          </Text>
        )}

        <Appearable
          isActive={isSorted}
          isCenter
          zIndex>
          <Rotatable isActive={!isSorted || sortingF[sortIndex]?.isDescending}>
            <Icon icon="arrowUp" />
          </Rotatable>
        </Appearable>
      </Wrapper>
    );
  };

  const renderRow = (
    row: TableRowModel<TType>,
    i: number,
    isFrozenTable: boolean,
  ): ReactElement => (
    <Wrapper
      border={DIRECTION.TOP}
      borderColor={theme.color.border}
      isAlign
      isOverflowHidden
      isRow
      key={row.id}
      pVertical={THEME_SIZE.SMALL}>
      {row.cells.map((cell) => {
        if (cell.isHidden || (cell.isFrozen ?? false) !== (isFrozenTable ?? false)) {
          return null;
        }
        let element: ReactElement | null = null;
        if (cell.renderer) {
          element = cell.renderer({ id: row.id, index: i, row: row.value, value: cell.value });
        } else if (cell.field) {
          const field = cell.field({ index: i, row: row.value, value: cell.value });
          const onChangeF = field?.props.onChange;
          element = cloneElement(field, {
            error: row.id && cell.columnId && getValue(errors, `${row.id}.${cell.columnId}`),
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
            <Wrapper
              height={theme.shape.size[THEME_SIZE.SMALL]}
              justify={FLEX_JUSTIFY.CENTER}>
              {element ?? <AsyncText>{emptyCell}</AsyncText>}
            </Wrapper>
          </Skeleton>
        );
      })}
    </Wrapper>
  );

  const handleScrollSync = (
    position: PositionModel,
    direction: 'x' | 'y',
    target: string,
  ): void => {
    if (isScrolling.current) {
      return;
    }
    isScrolling.current = true;
    const scrollRef = (() => {
      switch (target) {
        case TABLE_COMPONENT_ID_ROWS_LIST:
          return rowsListFrozenRef.current;
        case TABLE_COMPONENT_ID_FROZEN_ROWS_LIST:
          return rowsListRef.current;
        case TABLE_COMPONENT_ID_HEADERS_WRAPPER:
          return rowsWrapperRef.current;
        case TABLE_COMPONENT_ID_ROWS_WRAPPER:
          return headersWrapperRef.current;
        default:
          return undefined;
      }
    })();
    scrollRef?.scrollTo(direction === 'x' ? { x: position.x } : { y: position.y });
    setTimeout(handleScrollEnd, 16);
  };

  const handleScrollEnd = (): void => {
    isScrolling.current = false;
  };

  return rows?.length ? (
    <Wrapper
      {...wrapperProps}
      flex
      isFullWidth={isFullWidth}
      pTop={THEME_SIZE.SMALL}>
      {/* headers */}
      {!isHeadless && (
        <Wrapper
          isAlign
          isRow>
          <Wrapper
            border={DIRECTION.RIGHT}
            isAlign
            isRow
            pHorizontal={THEME_SIZE.SMALL}>
            {headersFrozen.map(renderHeader)}
          </Wrapper>

          <Wrapper
            flex
            isAlign
            isHorizontalScrollable
            isHorizontalScrollableVisible={false}
            onScroll={(position) =>
              handleScrollSync(position, 'x', TABLE_COMPONENT_ID_HEADERS_WRAPPER)
            }
            onScrollEnd={handleScrollEnd}
            pHorizontal={THEME_SIZE.SMALL}
            ref={headersWrapperRef}>
            {headersUnfrozen.map(renderHeader)}
          </Wrapper>
        </Wrapper>
      )}

      {/* rows */}
      <Wrapper
        flex
        isRow>
        <Wrapper
          border={DIRECTION.RIGHT}
          pHorizontal={THEME_SIZE.SMALL}>
          <VirtualizedList
            isVerticalScrollable
            isVerticalScrollableVisible={false}
            itemSize={theme.shape.size[THEME_SIZE.SMALL]}
            items={rows}
            onScroll={(position) =>
              handleScrollSync(position, 'y', TABLE_COMPONENT_ID_FROZEN_ROWS_LIST)
            }
            ref={rowsListFrozenRef}
            render={(row, i) => renderRow(row, i, true)}
          />
        </Wrapper>

        <Wrapper
          flex
          isHorizontalScrollable
          onScroll={(position) => handleScrollSync(position, 'x', TABLE_COMPONENT_ID_ROWS_WRAPPER)}
          onScrollEnd={handleScrollEnd}
          pHorizontal={THEME_SIZE.SMALL}
          ref={rowsWrapperRef}>
          <VirtualizedList
            isVerticalScrollable
            isVerticalScrollableVisible
            itemSize={theme.shape.size[THEME_SIZE.SMALL]}
            items={rows}
            onScroll={(position) => handleScrollSync(position, 'y', TABLE_COMPONENT_ID_ROWS_LIST)}
            ref={rowsListRef}
            render={(row, i) => renderRow(row, i, false)}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  ) : (
    (emptyElement ?? (
      <Wrapper
        flex
        isCenter>
        <Text
          align={FONT_ALIGN.CENTER}
          colorRole={THEME_ROLE.MUTED}>
          {t('core:nothingToShow')}
        </Text>
      </Wrapper>
    ))
  );
};

// import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
// import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
// import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
// import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
// import { Button } from '@lib/frontend/core/components/Button/Button';
// import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
// import { Icon } from '@lib/frontend/core/components/Icon/Icon';
// import { Text } from '@lib/frontend/core/components/Text/Text';
// import { type ScrollableViewRefModel } from '@lib/frontend/core/components/View/View.models';
// import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
// import { type VirtualizedListRefModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
// import { DIRECTION } from '@lib/frontend/core/core.constants';
// import { type PositionModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
// import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
// import { TABLE_CELL_WIDTH_DEFAULT } from '@lib/frontend/data/components/Table/Table.constants';
// import {
//   type TablePropsModel,
//   type TableRefModel,
// } from '@lib/frontend/data/components/Table/Table.models';
// import { type FormErrorModel } from '@lib/frontend/data/data.models';
// import { useTable } from '@lib/frontend/data/hooks/useTable/useTable';
// import { TABLE_SELECT_TYPE } from '@lib/frontend/data/hooks/useTable/useTable.constants';
// import {
//   type TableHeaderModel,
//   type TableRowModel,
//   type TableSortModel,
// } from '@lib/frontend/data/hooks/useTable/useTable.models';
// import { useValidator } from '@lib/frontend/data/hooks/useValidator/useValidator';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
// import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
// import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
// import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
// import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
// import { type StringKeyModel } from '@lib/shared/core/core.models';
// import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
// import { getValue } from '@lib/shared/core/utils/getValue/getValue';
// import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
// import { stringify } from '@lib/shared/core/utils/stringify/stringify';
// import { updateArray } from '@lib/shared/core/utils/updateArray/updateArray';
// import cloneDeep from 'lodash/cloneDeep';
// import isNil from 'lodash/isNil';
// import partition from 'lodash/partition';
// import remove from 'lodash/remove';
// import {
//   cloneElement,
//   type ReactElement,
//   type ReactNode,
//   type RefObject,
//   useImperativeHandle,
//   useMemo,
//   useRef,
//   useState,
// } from 'react';

// export const Table = <TType,>({
//   columns,
//   data,
//   elementState,
//   emptyCell = '-',
//   emptyElement,
//   idField,
//   isFullWidth = true,
//   isHeadless,
//   isRemovable,
//   onChange,
//   onRemove,
//   onSelect,
//   ref,
//   select,
//   sorting,
//   validators,
//   ...props
// }: RLFCPropsModel<TableRefModel<TType>, TablePropsModel<TType>>): ReactElement<
//   RLFCPropsModel<TableRefModel<TType>, TablePropsModel<TType>>
// > => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const { wrapperProps } = useLayoutStyles({ props });
//   const [selected, selectedSet] = useState<Record<string, true>>({});

//   const scrollSource = useRef<RefObject<ScrollableViewRefModel | null>>(null);
//   const headersWrapperRef = useRef<WrapperRefModel>(null);
//   const rowsListRef = useRef<VirtualizedListRefModel>(null);
//   const rowsListFrozenRef = useRef<VirtualizedListRefModel>(null);
//   const rowsWrapperRef = useRef<WrapperRefModel>(null);

//   const columnsF = useMemo<TablePropsModel<TType>['columns']>(
//     () =>
//       filterNil([
//         ...(columns ?? []),

//         isRemovable && {
//           id: 'remove' as StringKeyModel<TType>,
//           isFilterDisabled: false,
//           isFrozen: true,
//           label: '',
//           renderer: ({ index }) => (
//             <Button
//               color={THEME_COLOR.ERROR}
//               confirmMessage={t('core:confirmRemove')}
//               icon="trash"
//               onPress={() => handleRemove && handleRemove(index)}
//               size={THEME_SIZE.SMALL}
//               type={BUTTON_TYPE.INVISIBLE}
//             />
//           ),
//           width: theme.shape.size[THEME_SIZE.SMALL],
//         },

//         select && {
//           id: 'select' as StringKeyModel<TType>,
//           isFilterDisabled: false,
//           isFrozen: true,
//           label: '',
//           renderer: ({ id }) => (
//             <CheckboxInput
//               isCenter
//               onChange={(v) => {
//                 if (select === TABLE_SELECT_TYPE.SINGLE) {
//                   selectedSet({ [id]: true });
//                 } else {
//                   const selectedNew = cloneDeep(selected);
//                   if (v) {
//                     selectedNew[id] = true;
//                   } else {
//                     delete selectedNew[id];
//                   }
//                   selectedSet(selectedNew);
//                   onSelect && onSelect(data?.filter((row) => selectedNew[row[idField] as string]));
//                 }
//               }}
//               value={selected[id] ?? false}
//             />
//           ),
//           width: theme.shape.size[THEME_SIZE.SMALL],
//         },
//       ]),
//     [columns, isRemovable, select, selected],
//   );

//   const dataF = useMemo(
//     () =>
//       [
//         { id: '1' },
//         { id: '2' },
//         { id: '3' },
//         { id: '4' },
//         { id: '5' },
//         { id: '6' },
//         { id: '7' },
//         { id: '8' },
//         { id: '9' },
//         { id: '10' },
//         { id: '11' },
//         { id: '12' },
//       ].map((x) => ({ _id: x.id, email: `${x.id}@email.com`, id: x.id })) as Array<TType>,
//     [],
//   );

//   const [sortingF, sortingSet] = useState<Array<TableSortModel<TType>>>(sorting ?? []);
//   const { headers, rows } = useTable({
//     columns: columnsF,
//     data: dataF,
//     // data,
//     idField,
//     sorting: sortingF,
//   });
//   const validate = useValidator();
//   const [errors, errorsSet] = useState<Record<string, FormErrorModel<TType>>>();

//   useImperativeHandle(ref, () => ({
//     remove: handleRemove,
//     select: () => selectedSet({}),
//     validate: () => {
//       if (rows && validators) {
//         const errorsF = rows.reduce((result, row) => {
//           const rowErrors = validate({ data: row.value, validators });
//           return rowErrors ? { ...result, [row.id]: rowErrors } : result;
//         }, {});
//         errorsSet(errorsF);
//         return isEmpty(errorsF);
//       }
//       return true;
//     },
//   }));

//   const handleRemove = onChange
//     ? (i: number) => {
//         const newValue = cloneDeep(data);
//         if (onRemove) {
//           const row = newValue?.[i];
//           row && void onRemove(row);
//         }
//         newValue?.splice(i, 1);
//         onChange(newValue);
//       }
//     : undefined;

//   const [headersFrozen, headersUnfrozen] = useMemo<
//     [Array<TableHeaderModel<TType>>, Array<TableHeaderModel<TType>>]
//   >(() => partition(headers, (v) => v.isFrozen), [headers]);

//   const renderHeader = ({
//     align,
//     headerRenderer,
//     id,
//     isHidden,
//     label,
//     width,
//   }: TableHeaderModel<TType>): ReactNode => {
//     if (isHidden) {
//       return null;
//     }
//     const sortIndex = sortingF.findIndex((v) => v.id === id);
//     const isSorted = sortIndex >= 0 && !!sortingF[sortIndex];
//     return (
//       <Wrapper
//         height={theme.shape.size[THEME_SIZE.SMALL]}
//         isAlign
//         isRow
//         key={id}
//         onPress={() =>
//           sortingSet(
//             isSorted
//               ? sortingF[sortIndex]?.isDescending
//                 ? remove(sortingF, sortIndex)
//                 : updateArray(sortingF, sortIndex, (v) =>
//                     v ? { ...v, isDescending: !v.isDescending } : undefined,
//                   )
//               : [{ id }],
//           )
//         }
//         position={SHAPE_POSITION.RELATIVE}
//         width={width || TABLE_CELL_WIDTH_DEFAULT}>
//         {headerRenderer ? (
//           headerRenderer()
//         ) : (
//           <Text
//             align={align}
//             isBold
//             isEllipsis>
//             {label}
//           </Text>
//         )}

//         <Appearable
//           isActive={isSorted}
//           isCenter
//           zIndex>
//           <Rotatable isActive={!isSorted || sortingF[sortIndex]?.isDescending}>
//             <Icon icon="arrowUp" />
//           </Rotatable>
//         </Appearable>
//       </Wrapper>
//     );
//   };

//   const renderRow = (
//     row: TableRowModel<TType>,
//     i: number,
//     isFrozenTable: boolean,
//   ): ReactElement => (
//     <Wrapper
//       border={DIRECTION.TOP}
//       borderColor={theme.color.border}
//       isAlign
//       isOverflowHidden
//       isRow
//       key={row.id}
//       pVertical={THEME_SIZE.SMALL}>
//       {row.cells.map((cell) => {
//         if (cell.isHidden || (cell.isFrozen ?? false) !== (isFrozenTable ?? false)) {
//           return null;
//         }
//         let element: ReactElement | null = null;
//         if (cell.renderer) {
//           element = cell.renderer({ id: row.id, index: i, row: row.value, value: cell.value });
//         } else if (cell.field) {
//           const field = cell.field({ index: i, row: row.value, value: cell.value });
//           const onChangeF = field?.props.onChange;
//           element = cloneElement(field, {
//             error: row.id && cell.columnId && getValue(errors, `${row.id}.${cell.columnId}`),
//             onChange: onChange
//               ? <TKey extends StringKeyModel<TType>>(value: TType[TKey]) => {
//                   const newValue = cloneDeep(data);
//                   cell.columnId && newValue && (newValue[i][cell.columnId] = value);
//                   onChange(newValue);
//                   onChangeF && onChangeF(value);
//                 }
//               : onChangeF,
//             value: cell.value,
//           });
//         } else {
//           element = (
//             <AsyncText
//               align={cell.align}
//               isEllipsis>
//               {isNil(cell.value) ? emptyCell : stringify(cell.value)}
//             </AsyncText>
//           );
//         }
//         return (
//           <Skeleton
//             elementState={elementState}
//             key={cell.id}
//             width={cell.width || TABLE_CELL_WIDTH_DEFAULT}>
//             <Wrapper
//               height={theme.shape.size[THEME_SIZE.SMALL]}
//               justify={FLEX_JUSTIFY.CENTER}>
//               {element ?? <AsyncText>{emptyCell}</AsyncText>}
//             </Wrapper>
//           </Skeleton>
//         );
//       })}
//     </Wrapper>
//   );

//   const handleScrollSync = (
//     position: PositionModel,
//     direction: 'x' | 'y',
//     target: RefObject<ScrollableViewRefModel | null>,
//   ): void => {
//     if (scrollSource.current && scrollSource.current !== target) {
//       return;
//     }
//     scrollSource.current = target;
//     const scrollRef = (() => {
//       switch (scrollSource.current) {
//         case headersWrapperRef:
//           return rowsWrapperRef.current;
//         case rowsWrapperRef:
//           return headersWrapperRef.current;
//         case rowsListRef:
//           return rowsListFrozenRef.current;
//         case rowsListFrozenRef:
//           return rowsListRef.current;
//         default:
//           return undefined;
//       }
//     })();
//     scrollRef?.scrollTo(direction === 'x' ? { x: position.x } : { y: position.y });
//   };

//   const handleScrollEnd = (): void => {
//     scrollSource.current = null;
//   };

//   return rows?.length ? (
//     <Wrapper
//       {...wrapperProps}
//       flex
//       isFullWidth={isFullWidth}
//       pTop={THEME_SIZE.SMALL}>
//       {/* headers */}
//       {!isHeadless && (
//         <Wrapper
//           isAlign
//           isRow>
//           <Wrapper
//             border={DIRECTION.RIGHT}
//             isAlign
//             isRow
//             pHorizontal={THEME_SIZE.SMALL}>
//             {headersFrozen.map(renderHeader)}
//           </Wrapper>

//           <Wrapper
//             flex
//             isAlign
//             isHorizontalScrollable
//             onScroll={(position) => handleScrollSync(position, 'x', headersWrapperRef)}
//             onScrollEnd={handleScrollEnd}
//             pHorizontal={THEME_SIZE.SMALL}
//             ref={headersWrapperRef}>
//             {headersUnfrozen.map(renderHeader)}
//           </Wrapper>
//         </Wrapper>
//       )}

//       {/* rows */}
//       <Wrapper
//         flex
//         isRow>
//         <Wrapper
//           border={DIRECTION.RIGHT}
//           pHorizontal={THEME_SIZE.SMALL}>
//           <VirtualizedList
//             flex
//             isVerticalScrollable
//             isVerticalScrollableVisible={false}
//             itemSize={theme.shape.size[THEME_SIZE.SMALL]}
//             items={rows}
//             onScroll={(position) => handleScrollSync(position, 'y', rowsListFrozenRef)}
//             ref={rowsListFrozenRef}
//             render={(row, i) => renderRow(row, i, true)}
//           />
//         </Wrapper>

//         <Wrapper
//           flex
//           isHorizontalScrollable
//           onScroll={(position) => handleScrollSync(position, 'x', rowsWrapperRef)}
//           onScrollEnd={handleScrollEnd}
//           pHorizontal={THEME_SIZE.SMALL}
//           ref={rowsWrapperRef}>
//           <VirtualizedList
//             flex
//             isVerticalScrollable
//             isVerticalScrollableVisible
//             itemSize={theme.shape.size[THEME_SIZE.SMALL]}
//             items={rows}
//             onScroll={(position) => handleScrollSync(position, 'y', rowsListRef)}
//             ref={rowsListRef}
//             render={(row, i) => renderRow(row, i, false)}
//           />
//         </Wrapper>
//       </Wrapper>
//     </Wrapper>
//   ) : (
//     (emptyElement ?? (
//       <Wrapper
//         flex
//         isCenter>
//         <Text
//           align={FONT_ALIGN.CENTER}
//           colorRole={THEME_ROLE.MUTED}>
//           {t('core:nothingToShow')}
//         </Text>
//       </Wrapper>
//     ))
//   );
// };
