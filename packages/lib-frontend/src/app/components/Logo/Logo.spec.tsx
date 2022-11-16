import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LogoPropsModel>({ target: Logo });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
