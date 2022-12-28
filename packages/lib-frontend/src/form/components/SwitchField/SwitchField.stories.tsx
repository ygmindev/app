import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';
import { SwitchField } from '@lib/frontend/form/components/SwitchField/SwitchField';

const { Story, meta } = withStory<_SwitchFieldPropsModel>({
  defaultProps: {},
  target: SwitchField,
  variants: [
    { props: { isDisabled: true } },
    { props: { activeIcon: ICONS.happy, inactiveIncon: ICONS.sad } },
  ],
});

export { meta as default, Story };
