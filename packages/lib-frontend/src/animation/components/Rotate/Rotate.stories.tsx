import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Rotate } from '@lib/frontend/animation/components/Rotate/Rotate';
import type { RotatePropsModel } from '@lib/frontend/animation/components/Rotate/Rotate.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

const { Default, meta } = withStory<RotatePropsModel>({
  defaultProps: {
    children: (
      <Icon
        icon={ICON.chevronRight}
        size={THEME_SIZE.LARGE}
      />
    ),
  },
  target: Rotate,
  variants: [
    { props: { x: 45 } },
    { props: { x: 90 } },
    { props: { x: 180 } },
    { props: { y: 45 } },
    { props: { y: 90 } },
    { props: { y: 180 } },
    { props: { z: 45 } },
    { props: { z: 90 } },
    { props: { z: 180 } },
  ],
});

export { Default, meta as default };
