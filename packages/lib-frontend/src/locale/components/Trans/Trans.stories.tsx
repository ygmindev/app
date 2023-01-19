import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import type { TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { TEST } from '@lib/shared/test/test.constants';

const { Story, meta } = withStory<TransPropsModel<unknown>>({
  defaultProps: {
    i18nKey: 'labels.testWithString',
    ns: TEST,
  },
  target: Trans,
  variants: [
    {
      props: {
        i18nKey: 'labels.testWithParams',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
    {
      props: {
        components: [<Text color={THEME_COLOR.PRIMARY} />, <Text color={THEME_COLOR.SECONDARY} />],
        i18nKey: 'labels.testWithElements',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
  ],
});

export { meta as default, Story };
