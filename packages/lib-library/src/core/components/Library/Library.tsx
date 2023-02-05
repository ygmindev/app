import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LIBRARY } from '@lib/library/core/core.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';
import map from 'lodash/map';
import toString from 'lodash/toString';
import type { Attributes, ComponentType, ReactElement } from 'react';
import { createElement, useMemo } from 'react';

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
  const { t } = useTranslation([LIBRARY]);

  const _categories = useMemo(
    () =>
      groupBy(
        withId([{ category: 'default', props: defaultProps }, ...(variants || [])]),
        ({ category, props }) => category || keys(props).join(', '),
      ),
    [variants],
  );

  return (
    <Wrapper
      grow
      isVerticalScrollable
      p
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
                    fontSize={THEME_SIZE.SMALL}>
                    {value as string}
                  </Text>
                ),
              },
              {
                id: 'type',
                renderer: ({ value }) => (
                  <Text
                    family={FONT_FAMILY.CODE}
                    fontSize={THEME_SIZE.SMALL}>
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

          <Wrapper
            isHorizontalScrollable
            isRow
            pBottom
            spacing>
            {v?.map(({ id, name: variantName, props: variantProps }) => (
              <Wrapper
                key={id}
                spacing={THEME_BASIC_SIZE.SMALL}>
                <Wrapper
                  border
                  p
                  round
                  spacing={THEME_BASIC_SIZE.SMALL}>
                  {name && <Text>{variantName}</Text>}

                  {createElement(
                    (Renderer || Component) as ComponentType,
                    { ...defaultProps, ...variantProps } as Attributes,
                  )}
                </Wrapper>

                <Wrapper isRowAlign>
                  {map(variantProps as object, (v, k) => (
                    <Wrapper key={k}>
                      <Text
                        fontSize={THEME_SIZE.SMALL}
                        isBold>
                        {k}
                      </Text>

                      <Text fontSize={THEME_SIZE.SMALL}>{toString(v)}</Text>
                    </Wrapper>
                  ))}
                </Wrapper>
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
