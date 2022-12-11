import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';

const { Default, meta } = withStory<ButtonPropsModel>({
  defaultProps: { children: 'text' },
  target: Button,
  variants: [
    { props: { isLoading: true } },
    { props: { isDisabled: true } },
    { props: { icon: ICON.person } },
    ...Object.values(THEME_BASIC_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color, isTransparent: true } })),
  ],
});

export { Default, meta as default };
