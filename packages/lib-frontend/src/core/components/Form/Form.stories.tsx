import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Form } from '@lib/frontend/core/components/Form/Form';
import type { FormPropsModel } from '@lib/frontend/core/components/Form/Form.models';

const { Default, meta } = withStory<FormPropsModel>({
  defaultProps: {},
  target: Form,
  variants: [
    { props: { onClose: () => null } },
    { props: { submitLabel: 'Submit label' } },
    { props: { closeLabel: 'Close label' } },
    { props: { isLoading: true } },
  ],
});

export { Default, meta as default };
