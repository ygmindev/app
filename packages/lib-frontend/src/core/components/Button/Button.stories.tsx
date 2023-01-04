import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

const { Story, meta } = withStory<ButtonPropsModel>({
  defaultProps: { children: 'text' },
  target: Button,
  variants: [
    { props: { isLoading: true } },
    { props: { isDisabled: true } },
    { props: { icon: 'person' } },
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color, isTransparent: true } })),
  ],
});

export { meta as default, Story };
