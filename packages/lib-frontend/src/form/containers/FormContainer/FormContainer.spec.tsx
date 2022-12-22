import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FormContainerPropsModel<unknown>>({
  defaultProps: {
    initialValues: {},
    rows: [],
  },
  target: FormContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
