import { Text } from '@lib/frontend/core/components/Text/Text';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { type TransPropsModel } from '@lib/frontend/locale/components/Trans/Trans.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { TEST } from '@lib/shared/test/test.constants';

export const props: LibraryPropsModel<TransPropsModel<unknown>> = {
  Component: Trans,
  defaultProps: {
    i18nKey: 'testWithString',
    ns: TEST,
  },
  variants: [
    {
      props: {
        i18nKey: 'testWithParams',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
    {
      props: {
        components: [<Text color={THEME_COLOR.PRIMARY} />, <Text color={THEME_COLOR.SECONDARY} />],
        i18nKey: 'testWithElements',
        params: { value1: 'value1', value2: 'value2' },
      },
    },
  ],
};
