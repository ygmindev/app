import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { MaskedTextField } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField';
import type { MaskedTextFieldPropsModel } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField.models';

const { Story, meta } = withStory<MaskedTextFieldPropsModel>({
  defaultProps: { mask: 'custom-mask' },
  target: MaskedTextField,
  variants: [{ props: { mask: '$' } }],
});

export default meta;

export { Story };
