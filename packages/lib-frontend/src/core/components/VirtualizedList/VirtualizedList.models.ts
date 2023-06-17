import type {
  _VirtualizedListPropsModel,
  _VirtualizedListRefModel,
} from '#lib-frontend/core/components/VirtualizedList/_VirtualizedList.models';
import type { WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type VirtualizedListPropsModel<TType extends WithIdModel> = Omit<
  _VirtualizedListPropsModel<TType>,
  'divider'
> &
  Pick<WrapperPropsModel, 'spacing'>;

export type VirtualizedListRefModel = _VirtualizedListRefModel;
