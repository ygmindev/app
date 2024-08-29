import { Text } from '@lib/frontend/core/components/Text/Text';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type LibraryVariantModel } from '@lib/frontend/library/library.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { withId } from '@lib/shared/core/utils/withId/withId';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import keys from 'lodash/keys';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import toString from 'lodash/toString';
import {
  type Attributes,
  type ComponentType,
  createElement,
  isValidElement,
  type ReactElement,
  useMemo,
} from 'react';

export const Library = <TType extends unknown>({
  Component,
  Renderer,
  defaultProps,
  minWidth,
  title,
  variants,
  ...props
}: LFCPropsModel<LibraryPropsModel<TType>>): ReactElement<
  LFCPropsModel<LibraryPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });

  const categories = useMemo(
    () =>
      groupBy(
        withId([{ category: 'default', props: defaultProps }, ...(variants ?? [])]),
        ({ category, props }) => category || keys(props).join(', '),
        { isSort: false },
      ),
    [variants],
  );

  const typeToString = (value: unknown): string =>
    Array.isArray(value)
      ? `[${value.map(typeToString).join(', ')}]`
      : isValidElement(value)
        ? 'Element'
        : isFunction(value)
          ? (value?.prototype as { isReactComponent: boolean })?.isReactComponent ||
            toString(value).includes('return React.createElement')
            ? 'Element'
            : 'function'
          : isPlainObject(value)
            ? stringify(mapValues(value as object, typeToString))
            : toString(value);

  return (
    <Wrapper
      {...wrapperProps}
      flex
      isVerticalScrollable
      s>
      {title && <Text fontStyle={FONT_STYLE.HEADLINE}>{title}</Text>}

      {map(categories, (v, k) => (
        <Wrapper
          key={toString(k)}
          p
          s>
          {k && <Text fontStyle={FONT_STYLE.TITLE}>{k}</Text>}

          <VirtualizedList
            isHorizontal
            items={v}
            render={({
              id,
              name: variantName,
              props: variantProps,
            }: LibraryVariantModel<TType> & WithIdModel<string>) => (
              <Wrapper
                key={id}
                pBottom
                s={THEME_SIZE.SMALL}>
                <Wrapper
                  border
                  isHorizontalScrollable
                  isVerticalScrollable
                  minWidth={minWidth}
                  p
                  round
                  s={THEME_SIZE.SMALL}>
                  {variantName && <Text>{variantName}</Text>}

                  {createElement(
                    (Renderer ?? Component) as ComponentType,
                    { ...(defaultProps as object), ...variantProps } as Attributes,
                  )}
                </Wrapper>

                <Wrapper
                  isAlign
                  isRow>
                  {map(variantProps as object, (v, k) => (
                    <Wrapper key={k}>
                      <Text
                        fontSize={THEME_SIZE.SMALL}
                        isBold>
                        {k}
                      </Text>

                      <Text fontSize={THEME_SIZE.SMALL}>{typeToString(v)}</Text>
                    </Wrapper>
                  ))}
                </Wrapper>
              </Wrapper>
            )}
            s
          />
        </Wrapper>
      ))}
    </Wrapper>
  );
};
