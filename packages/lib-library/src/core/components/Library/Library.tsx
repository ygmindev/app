import { Text } from '@lib/frontend/core/components/Text/Text';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type {
  LibraryPropsModel,
  LibraryVariantModel,
} from '@lib/library/core/components/Library/Library.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { mapValues } from 'lodash';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import keys from 'lodash/keys';
import map from 'lodash/map';
import toString from 'lodash/toString';
import type { Attributes, ComponentType, ReactElement } from 'react';
import { createElement, isValidElement, useMemo } from 'react';

export const Library = <TProps,>({
  Component,
  Renderer,
  defaultProps,
  name,
  propTypes,
  testID,
  variants,
  ...props
}: SFCPropsModel<LibraryPropsModel<TProps>>): ReactElement<
  SFCPropsModel<LibraryPropsModel<TProps>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();

  const _categories = useMemo(
    () =>
      groupBy(
        withId([{ category: 'default', props: defaultProps }, ...(variants || [])]),
        ({ category, props }) => category || keys(props).join(', '),
        { isSort: false },
      ),
    [variants],
  );

  const _typeToString = (value: unknown): string =>
    isArray(value)
      ? `[${value.map(_typeToString).join(', ')}]`
      : isValidElement(value)
      ? 'Element'
      : isFunction(value)
      ? value?.prototype?.isReactComponent || toString(value).includes('return React.createElement')
        ? 'Element'
        : 'function'
      : isPlainObject(value)
      ? stringify(mapValues(value as object, _typeToString))
      : toString(value);

  return (
    <Wrapper
      grow
      spacing
      style={styles}
      testID={testID}>
      {name && <Text type={FONT_TYPE.HEADLINE}>{name}</Text>}

      {propTypes && (
        <Wrapper>
          <Text type={FONT_TYPE.TITLE}>{t('library:labels.propTypes')}</Text>

          {/* <Table
            columns={[
              {
                id: 'name',
                renderer: ({ value }) => (
                  <Text
                    family={FONT_FAMILY.CODE}
                    fontSize={THEME_SIZE_MORE.SMALL}>
                    {value as string}
                  </Text>
                ),
              },
              {
                id: 'type',
                renderer: ({ value }) => (
                  <Text
                    family={FONT_FAMILY.CODE}
                    fontSize={THEME_SIZE_MORE.SMALL}>
                    {value as string}
                  </Text>
                ),
              },
              { id: 'isOptional' },
            ]}
            data={propTypes}
            isVirtualized={false}
          /> */}
        </Wrapper>
      )}

      {map(_categories, (v, k) => (
        <Wrapper
          key={toString(k)}
          p
          spacing>
          {k && <Text type={FONT_TYPE.TITLE}>{k}</Text>}

          <VirtualizedList
            isHorizontal
            items={v}
            render={({
              id,
              name: variantName,
              props: variantProps,
            }: LibraryVariantModel<TProps> & WithIdModel<string>) => (
              <Wrapper
                key={id}
                pBottom
                spacing={THEME_SIZE.SMALL}>
                <Wrapper
                  border
                  p
                  round
                  spacing={THEME_SIZE.SMALL}>
                  {variantName && <Text>{variantName}</Text>}

                  {createElement(
                    (Renderer || Component) as ComponentType,
                    { ...defaultProps, ...variantProps } as Attributes,
                  )}
                </Wrapper>

                <Wrapper isRowAlign>
                  {map(variantProps as object, (v, k) => (
                    <Wrapper key={k}>
                      <Text
                        fontSize={THEME_SIZE_MORE.SMALL}
                        isBold>
                        {k}
                      </Text>

                      <Text fontSize={THEME_SIZE_MORE.SMALL}>{_typeToString(v)}</Text>
                    </Wrapper>
                  ))}
                </Wrapper>
              </Wrapper>
            )}
          />
        </Wrapper>
      ))}
    </Wrapper>
  );
};

// import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import type { SFCPropsModel } from '@lib/frontend/core/core.models';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
// import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
// import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
// import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
// import { withId } from '@lib/shared/core/decorators/withId/withId';
// import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
// import isFunction from 'lodash/isFunction';
// import keys from 'lodash/keys';
// import map from 'lodash/map';
// import toString from 'lodash/toString';
// import type { Attributes, ComponentType, ReactElement } from 'react';
// import { createElement, isValidElement, useMemo } from 'react';

// export const Library = <TProps,>({
//   Component,
//   Renderer,
//   defaultProps,
//   name,
//   propTypes,
//   testID,
//   variants,
//   ...props
// }: SFCPropsModel<LibraryPropsModel<TProps>>): ReactElement<
//   SFCPropsModel<LibraryPropsModel<TProps>>
// > => {
//   const { styles } = useStyles({ props });
//   const { t } = useTranslation();

//   const _categories = useMemo(
//     () =>
//       groupBy(
//         withId([{ category: 'default', props: defaultProps }, ...(variants || [])]),
//         ({ category, props }) => category || keys(props).join(', '),
//         { isSort: false },
//       ),
//     [variants],
//   );

//   const _typeToString = (value: unknown): string =>
//     isValidElement(value)
//       ? 'ReactElement'
//       : isFunction(value)
//       ? value?.prototype?.isReactComponent || toString(value).includes('return React.createElement')
//         ? 'ReactComponent'
//         : 'function'
//       : toString(value);

//   return (
//     <Wrapper
//       grow
//       spacing
//       style={styles}
//       testID={testID}>
//       {name && <Text type={FONT_TYPE.HEADLINE}>{name}</Text>}

//       {propTypes && (
//         <Wrapper>
//           <Text type={FONT_TYPE.TITLE}>{t('library:labels.propTypes')}</Text>

//           {/* <Table
//             columns={[
//               {
//                 id: 'name',
//                 renderer: ({ value }) => (
//                   <Text
//                     family={FONT_FAMILY.CODE}
//                     fontSize={THEME_SIZE_MORE.SMALL}>
//                     {value as string}
//                   </Text>
//                 ),
//               },
//               {
//                 id: 'type',
//                 renderer: ({ value }) => (
//                   <Text
//                     family={FONT_FAMILY.CODE}
//                     fontSize={THEME_SIZE_MORE.SMALL}>
//                     {value as string}
//                   </Text>
//                 ),
//               },
//               { id: 'isOptional' },
//             ]}
//             data={propTypes}
//             isVirtualized={false}
//           /> */}
//         </Wrapper>
//       )}

//       {map(_categories, (v, k) => (
//         <Wrapper
//           key={toString(k)}
//           p
//           spacing>
//           {k && <Text type={FONT_TYPE.TITLE}>{k}</Text>}

//           <Wrapper
//             isHorizontalScrollable
//             isRow
//             pBottom
//             spacing>
//             {v?.map(({ id, name: variantName, props: variantProps }) => (
//               <Wrapper
//                 key={id}
//                 spacing={THEME_SIZE.SMALL}>
//                 <Wrapper
//                   border
//                   p
//                   round
//                   spacing={THEME_SIZE.SMALL}>
//                   {name && <Text>{variantName}</Text>}

//                   {createElement(
//                     (Renderer || Component) as ComponentType,
//                     { ...defaultProps, ...variantProps } as Attributes,
//                   )}
//                 </Wrapper>

//                 <Wrapper isRowAlign>
//                   {map(variantProps as object, (v, k) => (
//                     <Wrapper key={k}>
//                       <Text
//                         fontSize={THEME_SIZE_MORE.SMALL}
//                         isBold>
//                         {k}
//                       </Text>

//                       <Text fontSize={THEME_SIZE_MORE.SMALL}>{_typeToString(v)}</Text>
//                     </Wrapper>
//                   ))}
//                 </Wrapper>
//               </Wrapper>
//             ))}
//           </Wrapper>
//         </Wrapper>
//       ))}
//     </Wrapper>
//   );
// };
