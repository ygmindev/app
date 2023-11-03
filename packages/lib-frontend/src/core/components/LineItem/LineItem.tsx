import { useState } from 'react';

import { Skeleton } from '#lib-frontend/animation/components/Skeleton/Skeleton';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const LineItem: LFCModel<LineItemPropsModel> = ({
  button,
  children,
  elementState,
  icon,
  image,
  isBorder = true,
  label,
  onPress,
  rightElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const [isActive, isActiveSet] = useState<boolean>();

  const rightElementF =
    button ??
    (onPress &&
      ((isActive) => (
        <Button
          elementState={elementState ?? (isActive ? ELEMENT_STATE.ACTIVE : undefined)}
          icon="chevronRight"
          type={BUTTON_TYPE.INVISIBLE}
        />
      )));

  return (
    <Activatable
      onActive={() => isActiveSet(true)}
      onInactive={() => isActiveSet(false)}>
      <Skeleton
        {...wrapperProps}
        border={isBorder ? DIRECTION.TOP : undefined}
        p>
        <Wrapper
          flex
          isRowAlign
          onPress={onPress}>
          <Wrapper
            flex
            isRowAlign>
            {image && (
              <Image
                isAutoSize
                src={image}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}
              />
            )}

            {icon && (
              <Icon
                icon={icon}
                width={theme.shape.size[THEME_SIZE.SMALL]}
              />
            )}

            <Wrapper
              align={FLEX_ALIGN.START}
              s={THEME_SIZE.SMALL}>
              <TranslatableText type={FONT_TYPE.TITLE}>{label}</TranslatableText>

              {isTranslatableText(children) ? (
                <TranslatableText>{children}</TranslatableText>
              ) : (
                children
              )}
            </Wrapper>
          </Wrapper>

          {rightElement}

          {rightElementF && rightElementF(isActive)}
        </Wrapper>
      </Skeleton>
    </Activatable>
  );
};
