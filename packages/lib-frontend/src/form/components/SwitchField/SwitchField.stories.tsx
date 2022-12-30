import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';
import { SwitchField } from '@lib/frontend/form/components/SwitchField/SwitchField';

const { Story, meta } = withStory<_SwitchFieldPropsModel>({
  defaultProps: {},
  target: SwitchField,
  variants: [
    { props: { isDisabled: true } },
    { props: { iconActive: 'happy', iconInactive: 'sad' } },
  ],
});

export { meta as default, Story };
