import isString from 'lodash/isString';
import { useState } from 'react';

import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import type { LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';

export const LineItem: SFCModel<LineItemPropsModel> = ({
  children,
  icon,
  label,
  onPress,
  rightElement,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const state = useStore((state) => state);
  const { t } = useTranslation();
  const [isActive, isActiveSet] = useState<boolean>();
  const isValue = value !== undefined;
  return (
    <Activatable
      onActive={() => isActiveSet(true)}
      onInactive={() => isActiveSet(false)}
      style={styles}>
      <Wrapper
        isRow
        onPress={onPress}
        p
        testID={testID}>
        <Wrapper
          grow
          isRowAlign>
          {icon && (
            <Wrapper width={theme.shape.height.s}>
              <Icon icon={icon} />
            </Wrapper>
          )}

          {label || isValue ? (
            <Wrapper spacing={THEME_SIZE.SMALL}>
              <TranslatableText isBold={isValue}>{label}</TranslatableText>

              {isValue && (
                <Text
                  colorRole={value ? undefined : THEME_ROLE.MUTED}
                  isEllipsis>
                  {isString(value) ? value : (value && value(state)) || t('core:labels.notSet')}
                </Text>
              )}
            </Wrapper>
          ) : null}

          {children}
        </Wrapper>

        {rightElement && rightElement(isActive)}
      </Wrapper>
    </Activatable>
  );
};
