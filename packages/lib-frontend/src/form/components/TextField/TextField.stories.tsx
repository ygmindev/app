import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
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
    { props: { leftElement: <Icon icon={ICONS.person} /> } },
    { props: { rightElement: <Icon icon={ICONS.person} /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
  ],
});

export { meta as default, Story };
