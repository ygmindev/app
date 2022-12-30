import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';
import { Switch } from 'react-native-switch';

export const _SwitchField = composeComponent<_SwitchFieldPropsModel, WrapperPropsModel>({
  getComponent: () => Wrapper,

  getProps: ({ iconActive, iconInactive, isDisabled, onChange, value }, theme) => {
    const _value = value === 'true';
    return {
      children: (
        <Switch
          backgroundActive={theme.colors.tone.primary.main}
          backgroundInactive={theme.colors.tone.secondary.main}
          circleSize={25}
          disabled={isDisabled}
          innerCircleStyle={{
            alignItems: 'center',
            borderColor: _value ? theme.colors.tone.primary.main : theme.colors.tone.secondary.main,
            justifyContent: 'center',
          }}
          onValueChange={(value) => onChange && onChange(value ? 'true' : 'false')}
          renderActiveText={false}
          renderInActiveText={false}
          renderInsideCircle={() => (
            <Icon
              color={_value ? theme.colors.tone.primary.main : theme.colors.tone.primary.muted}
              icon={_value ? iconActive : iconInactive}
            />
          )}
          value={_value}
        />
      ),
      opacity: isDisabled ? 0.5 : 1,
    };
  },
});
