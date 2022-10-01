import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { _SwitchFieldPropsModel } from '@lib/frontend/core/components/SwitchField/_SwitchField.models';
import { SwitchField } from '@lib/frontend/core/components/SwitchField/SwitchField';

const { Default, meta } = withStory<_SwitchFieldPropsModel>({
  defaultProps: {},
  target: SwitchField,
  variants: [
    { props: { isDisabled: true } },
    { props: { activeIcon: ICON.happy, inactiveIncon: ICON.sad } },
  ],
});

export { Default, meta as default };
