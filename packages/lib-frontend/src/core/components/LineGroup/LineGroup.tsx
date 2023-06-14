import type { LineGroupPropsModel } from '#lib-frontend/core/components/LineGroup/LineGroup.models';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { useDividers } from '#lib-frontend/core/hooks/useDividers/useDividers';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { ReactElement } from 'react';
import { Children } from 'react';

export const LineGroup: SFCModel<LineGroupPropsModel> = ({
  children,
  emptyString = ({ t }) => t('core:messages.nothingToShow'),
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const lineItems = Children.toArray(children) as Array<ReactElement>;
  const childrenF = useDividers(
    [
      title && (
        <Text
          p
          type={FONT_TYPE.TITLE}>
          {title}
        </Text>
      ),
      ...(lineItems.length
        ? lineItems
        : [
            <LineItem icon="empty">
              <TranslatableText>{emptyString}</TranslatableText>
            </LineItem>,
          ]),
    ].filter(Boolean) as Array<ReactElement>,
  );

  return (
    <Wrapper
      border
      pHorizontal={THEME_SIZE.SMALL}
      round
      style={styles}
      testID={testID}>
      {childrenF}
    </Wrapper>
  );
};
