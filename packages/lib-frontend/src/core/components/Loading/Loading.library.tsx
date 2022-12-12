import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

const { Default, meta } = withStory<LoadingPropsModel>({
  defaultProps: {},
  target: Loading,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
  ],
});

export { Default, meta as default };
