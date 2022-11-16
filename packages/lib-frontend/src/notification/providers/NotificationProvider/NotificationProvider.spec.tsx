import { NotificationProvider } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider';
import type { NotificationProviderPropsModel } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NotificationProviderPropsModel>({
  target: NotificationProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
