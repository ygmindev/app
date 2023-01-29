import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

const { Story, meta } = withStory<LogoPropsModel>({
  defaultProps: {},
  target: Logo,
  variants: [
    { props: { size: THEME_SIZE.SMALL } },
    { props: { size: THEME_SIZE.MEDIUM } },
    { props: { size: THEME_SIZE.LARGE } },
  ],
});

export default meta;

export { Story };
