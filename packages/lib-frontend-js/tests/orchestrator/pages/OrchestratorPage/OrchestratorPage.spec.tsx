import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrchestratorPagePropsModel>({
  target: OrchestratorPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
