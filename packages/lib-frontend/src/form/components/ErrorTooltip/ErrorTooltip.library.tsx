import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ErrorTooltip } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip';
import type { ErrorTooltipPropsModel } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip.models';

const { Default, meta } = withStory<ErrorTooltipPropsModel>({
  defaultProps: { error: 'error' },
  displayName: 'ErrorTooltip',
  target: ErrorTooltip,
  variants: [{ props: { error: ({ t }) => t('testing:labels.testingWithString') } }],
});

export { Default, meta as default };
