import { type LineGroupPropsModel } from '#lib-frontend/core/components/LineGroup/LineGroup.models';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const LineGroup: LFCModel<LineGroupPropsModel> = ({
  children,
  emptyString = ({ t }) => t('core:nothingToShow'),
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border
      flex
      isVerticalScrollable
      pHorizontal={THEME_SIZE.SMALL}
      round>
      {title && (
        <Text
          fontSize={THEME_SIZE.LARGE}
          p>
          {title}
        </Text>
      )}

      {children ?? (
        <LineItem icon="empty">
          <TranslatableText>{emptyString}</TranslatableText>
        </LineItem>
      )}
    </Wrapper>
  );
};
