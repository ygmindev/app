import { Accordion } from '@lib/frontend/core/components/Accordion/Accordion';
import type { AccordionPropsModel } from '@lib/frontend/core/components/Accordion/Accordion.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AccordionPropsModel>({
  target: Accordion,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
