import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

const { Default, meta } = withStory<LogoPropsModel>({
  defaultProps: {},
  target: Logo,
  variants: [
    { props: { size: THEME_BASIC_SIZE.SMALL } },
    { props: { size: THEME_BASIC_SIZE.MEDIUM } },
    { props: { size: THEME_BASIC_SIZE.LARGE } },
  ],
});

export { Default, meta as default };
