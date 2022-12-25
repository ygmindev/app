import { Text } from '@lib/frontend/core/components/Text/Text';
import { Trans as _Trans } from '@lib/frontend/locale/components/Trans/Trans';
import type { TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component: Trans, displayName } = withTestComponent<
  TransPropsModel<{ value1: string; value2: string }>
>({ target: _Trans });

describe(displayName, () => {
  test('works with string', async () => {
    const { queryByText } = render(
      <Trans
        i18nKey="labels.testWithString"
        ns="test"
      />,
    );
    await waitForExpect(() => expect(queryByText('test with string')).toBeTruthy());
  });

  test('works with params', async () => {
    const { queryByText } = render(
      <Trans
        i18nKey="labels.testWithParams"
        ns="test"
        params={{ value1: 'value1', value2: 'value2' }}
      />,
    );
    await waitForExpect(() => expect(queryByText('test with params: value1 value2')).toBeTruthy());
  });

  test('works with elements', async () => {
    const { queryByText } = render(
      <Trans
        Components={[<Text color={THEME_COLOR.PRIMARY} />, <Text color={THEME_COLOR.SECONDARY} />]}
        i18nKey="labels.testWithElements"
        ns="test"
        params={{ value1: 'value1', value2: 'value2' }}
      />,
    );
    await waitForExpect(() => {
      expect(queryByText('test with elements:')).toBeTruthy();
      expect(queryByText('value1')).toBeTruthy();
      expect(queryByText('value2')).toBeTruthy();
    });
  });
});
