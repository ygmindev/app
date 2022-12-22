import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import type { DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';

const { Story, meta } = withStory<DividerPropsModel>({
  defaultProps: {},
  displayName: 'Divider',
  target: (props) => (
    <Wrapper
      height={200}
      width={200}>
      <Divider {...props} />
    </Wrapper>
  ),
  variants: [{ props: { children: 'text' } }],
});

export { meta as default, Story };
