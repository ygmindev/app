import { RequestForm } from '@lib/frontend/aroom/pages/RequestForm/RequestForm';
import { type RequestFormPropsModel } from '@lib/frontend/aroom/pages/RequestForm/RequestForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RequestFormPropsModel>({ target: RequestForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
