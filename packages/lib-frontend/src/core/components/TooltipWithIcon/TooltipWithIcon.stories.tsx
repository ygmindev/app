import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { TooltipWithIcon } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon';
import type { TooltipWithIconPropsModel } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon.models';
import { THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';

const { Story, meta } = withStory<TooltipWithIconPropsModel>({
  defaultProps: { children: 'text' },
  target: TooltipWithIcon,
  variants: [...Object.values(THEME_COLOR).map((color) => ({ props: { color } }))],
});

export { Story, meta as default };
