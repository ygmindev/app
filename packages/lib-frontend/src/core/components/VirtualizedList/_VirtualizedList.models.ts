import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export interface _VirtualizedListPropsModel<TType extends WithIdModel> {
  items: Array<TType>;
  render(item: TType): ReactElement;
}
