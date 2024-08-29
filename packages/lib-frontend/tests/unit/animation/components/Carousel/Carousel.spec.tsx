import { Carousel } from '@lib/frontend/animation/components/Carousel/Carousel';
import { type CarouselPropsModel } from '@lib/frontend/animation/components/Carousel/Carousel.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CarouselPropsModel>({ target: Carousel });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
