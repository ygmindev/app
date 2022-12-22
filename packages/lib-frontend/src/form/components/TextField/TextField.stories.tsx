import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';

const { Story, meta } = withStory<TextFieldPropsModel>({
  defaultProps: { defaultValue: '', label: 'label' },
  target: TextField,
  variants: [
    { props: { label: undefined } },
    { props: { isAutoFocus: true } },
    { props: { isNoClear: true } },
    { props: { value: 'value' } },
    { props: { leftElement: <Icon icon={ICON.person} /> } },
    { props: { rightElement: <Icon icon={ICON.person} /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
  ],
});

export { meta as default, Story };
