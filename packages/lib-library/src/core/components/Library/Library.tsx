import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import type { Attributes, ComponentType, ReactElement } from 'react';
import { createElement } from 'react';

export const Library = <TProps,>({
  Component,
  defaultProps,
  name,
  testID,
  variants,
  ...props
}: SFCPropsModel<LibraryPropsModel<TProps>>): ReactElement<
  SFCPropsModel<LibraryPropsModel<TProps>>
> => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      isVerticalScrollable
      p
      spacing
      style={styles}
      testID={testID}>
      {/* {name && <Text type={FONT_TYPE.HEADLINE}>{name}</Text>} */}

      <Wrapper
        isHorizontalScrollable
        p
        spacing>
        {variants?.map(({ name: variantName, props: variantProps }) => (
          <Wrapper
            key={variantName}
            spacing={THEME_BASIC_SIZE.SMALL}>
            {name && <Text>{variantName}</Text>}

            {createElement(
              Component as ComponentType,
              { ...defaultProps, ...variantProps } as Attributes,
            )}
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
