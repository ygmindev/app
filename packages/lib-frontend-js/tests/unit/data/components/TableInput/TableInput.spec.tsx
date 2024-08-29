import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { type TableInputPropsModel } from '@lib/frontend/data/components/TableInput/TableInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TableInputPropsModel>({ target: TableInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
