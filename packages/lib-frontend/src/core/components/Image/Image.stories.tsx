import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Image } from '@lib/frontend/core/components/Image/Image';
import type { ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import { APP_URI } from '@lib/frontend/http/http.constants';

const { Story, meta } = withStory<ImagePropsModel>({
  defaultProps: { src: `${APP_URI}/assets/images/logos/logo.png` },
  target: Image,
  variants: [
    { props: { height: 50, width: 50 } },
    { props: { isAutoSize: true, width: 100 } },
    { props: { height: 100, isAutoSize: true } },
  ],
});

export { Story, meta as default };
