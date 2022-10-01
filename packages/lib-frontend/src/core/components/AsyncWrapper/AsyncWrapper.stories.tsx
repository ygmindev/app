import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AsyncWrapper } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper';
import type { AsyncWrapperPropsModel } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper.models';
import { Text } from '@lib/frontend/core/components/Text/Text';

const { Default, meta } = withStory<AsyncWrapperPropsModel>({
  defaultProps: {
    backgroundColor: 'secondary',
    children: <Text>Children</Text>,
    height: 100,
    isLoading: true,
    width: 100,
  },
  target: AsyncWrapper,
});

export { Default, meta as default };
