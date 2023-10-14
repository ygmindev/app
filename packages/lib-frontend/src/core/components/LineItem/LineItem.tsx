import { useState } from 'react';

import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';

export const LineItem: LFCModel<LineItemPropsModel> = ({
  children,
  icon,
  label,
  onPress,
  rightElement,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { t } = useTranslation();
  const [isActive, isActiveSet] = useState<boolean>();
  const isValue = !!value;

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
      <Wrapper
        {...wrapperProps}
        border={DIRECTION.TOP}
        isRow
        onPress={onPress}
        p={label ? THEME_SIZE.SMALL : true}>
        <Wrapper
          flex
          isRowAlign>
          {icon && (
            <Wrapper width={theme.shape.size[THEME_SIZE.SMALL]}>
              <Icon icon={icon} />
            </Wrapper>
          )}

          {label ?? isValue ? (
            <Wrapper s={THEME_SIZE.SMALL}>
              <TranslatableText isBold={isValue}>{label}</TranslatableText>

              {isValue && (
                <Text
                  colorRole={value ? undefined : THEME_ROLE.MUTED}
                  isEllipsis>
                  {value ?? t('core:notSet')}
                </Text>
              )}
            </Wrapper>
          ) : null}

          {children}
        </Wrapper>

        {rightElementF && rightElementF(isActive)}
      </Wrapper>
    </Activatable>
  );
};
