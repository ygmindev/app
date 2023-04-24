import type { _VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface VirtualizedListPropsModel<TType extends WithIdModel>
  extends Omit<_VirtualizedListPropsModel<TType>, 'divider'>,
    Pick<WrapperPropsModel, 'spacing'> {}
