import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { FONT_ALIGN } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

const { Default, meta } = withStory<TextPropsModel>({
  defaultProps: {
    children: 'text',
  },
  target: Text,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(FONT_ALIGN).map((align) => ({ align, props: { align } })),
    { props: { isBold: true } },
    { props: { isTitle: true } },
    { props: { isSubtitle: true } },
    { props: { isStylish: true } },
    { props: { isUppercase: true } },
    { props: { isCapitalize: true } },
    { props: { isLineHeight: true } },
    { props: { children: ({ t }) => t('testing:labels.testing') } },
    { props: { children: ({ t }) => t('testing:labels.testingWithParams', { value: 'value' }) } },
  ],
});

export { Default, meta as default };
