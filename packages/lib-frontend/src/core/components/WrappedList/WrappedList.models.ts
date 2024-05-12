import { type _WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/_WrappedList.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export type WrappedListPropsModel<TType extends unknown> = WrapperPropsModel &
  Omit<_WrappedListPropsModel<TType>, 'margin'>;
