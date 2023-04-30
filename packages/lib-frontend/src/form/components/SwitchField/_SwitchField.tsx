import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';

export const _SwitchField = composeComponent<_SwitchFieldPropsModel, WrapperPropsModel>({
  Component: Wrapper,

  getProps: ({ elementState, iconActive, iconInactive, value }, theme) => {
    const _value = value === 'true';
    const _isDisabled =
      elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING;

    return {
      // children: (
      //   <Switch
      //     backgroundActive={theme.colors.tone.primary.main}
      //     backgroundInactive={theme.colors.tone.secondary.main}
      //     circleSize={25}
      //     disabled={_isDisabled}
      //     innerCircleStyle={{
      //       alignItems: 'center',
      //       borderColor: _value ? theme.colors.tone.primary.main : theme.colors.tone.secondary.main,
      //       justifyContent: 'center',
      //     }}
      //     renderActiveText={false}
      //     renderInActiveText={false}
      //     renderInsideCircle={() => (
      //       <Icon
      //         color={_value ? theme.colors.tone.primary.main : theme.colors.tone.primary.muted}
      //         icon={_value ? iconActive : iconInactive}
      //       />
      //     )}
      //     value={_value}
      //   />
      // ),
      opacity: _isDisabled ? theme.colors.disabledOpacity : 1,
    };
  },
});
