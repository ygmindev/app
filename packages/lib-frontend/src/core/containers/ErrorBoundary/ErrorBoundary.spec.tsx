import { ErrorBoundary } from '#lib-frontend/core/containers/ErrorBoundary/ErrorBoundary';
import { type ErrorBoundaryPropsModel } from '#lib-frontend/core/containers/ErrorBoundary/ErrorBoundary.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ErrorBoundaryPropsModel>({
  target: ErrorBoundary,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
