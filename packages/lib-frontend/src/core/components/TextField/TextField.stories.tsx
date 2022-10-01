import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';

const { Default, meta } = withStory<TextFieldPropsModel>({
  defaultProps: { defaultValue: '', label: 'label' },
  target: TextField,
  variants: [
    { props: { label: undefined } },
    { props: { isAutoFocus: true } },
    { props: { isNoClear: true } },
    { props: { value: 'value' } },
    { props: { left: <Icon icon={ICON.person} /> } },
    { props: { right: <Icon icon={ICON.person} /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
  ],
});

export { Default, meta as default };
