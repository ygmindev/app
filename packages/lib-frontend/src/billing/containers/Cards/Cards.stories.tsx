import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Cards } from '@lib/frontend/billing/containers/Cards/Cards';
import type { CardsPropsModel } from '@lib/frontend/billing/containers/Cards/Cards.models';

const { Default, meta } = withStory<CardsPropsModel>({
  defaultProps: {},
  target: Cards,
  variants: [],
});

export { Default, meta as default };
