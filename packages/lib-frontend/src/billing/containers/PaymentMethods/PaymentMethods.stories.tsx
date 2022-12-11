import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { PaymentMethods } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods';
import type { PaymentMethodsPropsModel } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods.models';

const { Default, meta } = withStory<PaymentMethodsPropsModel>({
  defaultProps: {},
  target: PaymentMethods,
  variants: [],
});

export { Default, meta as default };
