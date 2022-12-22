import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import type { TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';
import { TESTING } from '@lib/shared/testing/testing.constants';

const { Story, meta } = withStory<TransPropsModel<unknown>>({
  defaultProps: {
    i18nKey: 'labels.testingWithString',
    ns: TESTING,
  },
  target: Trans,
  variants: [
    {
      props: {
        i18nKey: 'labels.testingWithParams',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
    {
      props: {
        Components: [<Text color={THEME_COLOR.PRIMARY} />, <Text color={THEME_COLOR.SECONDARY} />],
        i18nKey: 'labels.testingWithElements',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
  ],
});

export { Story, meta as default };
