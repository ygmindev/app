import type { ReactElement } from 'react';
import { Children } from 'react';

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
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const LineGroup: SFCModel<LineGroupPropsModel> = ({
  children,
  emptyString = ({ t }) => t('core:nothingToShow'),
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const lineItems = Children.toArray(children) as Array<ReactElement>;
  const childrenF = useDividers(
    filterNil([
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
    ]),
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
