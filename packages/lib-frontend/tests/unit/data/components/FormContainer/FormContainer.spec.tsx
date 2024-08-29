import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FormContainerPropsModel<unknown>>({
  defaultProps: {
    initialValues: {},
    rows: [],
  },
  target: FormContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
