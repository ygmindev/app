import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ErrorProvider } from '@lib/frontend/app/providers/ErrorProvider/ErrorProvider';
import type { ErrorProviderPropsModel } from '@lib/frontend/app/providers/ErrorProvider/ErrorProvider.models';

const { Default, meta } = withStory<ErrorProviderPropsModel>({
  defaultProps: {},
  target: ErrorProvider,
  variants: [],
});

export { Default, meta as default };
