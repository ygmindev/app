import { SearchField } from '@lib/frontend/form/components/SearchField/SearchField';
import type { SearchFieldPropsModel } from '@lib/frontend/form/components/SearchField/SearchField.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SearchFieldPropsModel>({
  target: SearchField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
