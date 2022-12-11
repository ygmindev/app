import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Default, meta } = withStory<DropdownPropsModel>({
  defaultProps: {
    anchor: <WrapperFixture width={150} />,
    children: <WrapperFixture />,
    isOpen: true,
  },
  displayName: 'Dropdown',
  target: (props) => (
    <Wrapper height={500} isCenter width={500}>
      <Dropdown {...props} />
    </Wrapper>
  ),

  variants: [
    { props: { isLeft: true } },
    { props: { isRight: true } },
    { props: { isTop: true } },
    { props: { isFullWidth: true } },
  ],
});

export { Default, meta as default };
