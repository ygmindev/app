import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { MaskedTextField } from '@lib/frontend/core/components/MaskedTextField/MaskedTextField';
import type { MaskedTextFieldPropsModel } from '@lib/frontend/core/components/MaskedTextField/MaskedTextField.models';

const { Default, meta } = withStory<MaskedTextFieldPropsModel>({
  defaultProps: { mask: 'custom-mask' },
  target: MaskedTextField,
  variants: [{ props: { mask: '$' } }],
});

export { Default, meta as default };
