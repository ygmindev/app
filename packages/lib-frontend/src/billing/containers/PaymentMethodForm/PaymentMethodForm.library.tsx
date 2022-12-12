import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { PaymentMethodForm } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm';
import type { PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';

const { Default, meta } = withStory<PaymentMethodFormPropsModel>({
  defaultProps: {},
  target: PaymentMethodForm,
  variants: [],
});

export { Default, meta as default };
