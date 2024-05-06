import { type FileInputPropsModel } from '@lib-frontend/data/components/FileInput/FileInput.models';
import { FileInput } from '@lib-frontend/data/components/FileInput/FileInput';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FileInputPropsModel>({
  target: FileInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
