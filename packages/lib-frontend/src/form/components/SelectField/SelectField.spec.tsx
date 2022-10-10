import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const OPTIONS: Array<SelectOptionModel> = [];

const { Component, displayName, testID } = withTestComponent({
  defaultProps: {
    options: OPTIONS,
  },
  target: SelectField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
