import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import type { OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';

const { Story, meta } = withStory<OtpFieldPropsModel>({
  defaultProps: {},
  target: OtpField,
  variants: [
    { props: { isAutoFocus: true } },
    { props: { isDisabled: true } },
    { props: { error: true } },
    { props: { error: 'error' } },
  ],
});

export default meta;

export { Story };
