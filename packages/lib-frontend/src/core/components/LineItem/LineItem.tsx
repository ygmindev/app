import { useState } from 'react';

import { Skeleton } from '#lib-frontend/animation/components/Skeleton/Skeleton';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const LineItem: LFCModel<LineItemPropsModel> = ({
  children,
  icon,
  label,
  onPress,
  rightElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const [isActive, isActiveSet] = useState<boolean>();

  const rightElementF =
    rightElement ??
    (onPress &&
      ((isActive) => (
        <Button
          elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
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
        border={DIRECTION.TOP}
        p>
        <Wrapper
          flex
          isRow
          onPress={onPress}>
          <Wrapper
            flex
            isRowAlign>
            {icon && (
              <Wrapper width={theme.shape.size[THEME_SIZE.SMALL]}>
                <Icon icon={icon} />
              </Wrapper>
            )}

            <Wrapper s={THEME_SIZE.SMALL}>
              <TranslatableText type={FONT_TYPE.TITLE}>{label}</TranslatableText>

              {isTranslatableText(children) ? (
                <TranslatableText>{children}</TranslatableText>
              ) : (
                children
              )}
            </Wrapper>
          </Wrapper>

          {rightElementF && rightElementF(isActive)}
        </Wrapper>
      </Skeleton>
    </Activatable>
  );
};
