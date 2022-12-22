import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { PaymentMethods } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods';
import type { PaymentMethodsPropsModel } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods.models';

const { Story, meta } = withStory<PaymentMethodsPropsModel>({
  defaultProps: {},
  target: PaymentMethods,
  variants: [],
});

export default meta;

export { Story };
