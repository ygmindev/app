import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { PersonalPage } from '@lib/frontend/user/pages/PersonalPage/PersonalPage';
import type { PersonalPagePropsModel } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.models';

const { Component, displayName, testID } = withTestComponent<PersonalPagePropsModel>({
  target: PersonalPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});