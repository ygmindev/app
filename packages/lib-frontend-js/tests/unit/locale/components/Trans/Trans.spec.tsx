import { Text } from '@lib/frontend/core/components/Text/Text';
import { Trans as _Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { type TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component: Trans, displayName } = withTestComponent<
  TransPropsModel<{ value1: string; value2: string }>
>({ target: _Trans });

describe(displayName, () => {
  test('string', async () => {
    const { findByText } = await render({
      element: (
        <Trans
          i18nKey="testWithString"
          ns="test"
        />
      ),
    });
    await waitForExpect(async () => expect(await findByText('test with string')).toBeTruthy());
  });

  test('params', async () => {
    const { findByText } = await render({
      element: (
        <Trans
          i18nKey="testWithInput"
          ns="test"
          params={{ value1: 'value1', value2: 'value2' }}
        />
      ),
    });
    await waitForExpect(async () =>
      expect(await findByText('test with params: value1 value2')).toBeTruthy(),
    );
  });

  test('elements', async () => {
    const { findByText } = await render({
      element: (
        <Trans
          components={[
            <Text color={THEME_COLOR.PRIMARY} />,
            <Text color={THEME_COLOR.SECONDARY} />,
          ]}
          i18nKey="testWithElements"
          ns="test"
          params={{ value1: 'value1', value2: 'value2' }}
        />
      ),
    });
    await waitForExpect(async () => {
      expect(await findByText('test with elements:')).toBeTruthy();
      expect(await findByText('value1')).toBeTruthy();
      expect(await findByText('value2')).toBeTruthy();
    });
  });
});
