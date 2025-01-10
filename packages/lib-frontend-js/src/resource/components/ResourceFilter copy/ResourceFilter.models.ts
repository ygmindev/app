import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type ResourceFilterPropsModel<TType, TResult = void, TRoot = undefined> = Omit<
  FormContainerPropsModel<TType, TResult>,
  'fields' | 'onSubmit'
> &
  ResourceParamsModel<TType, TRoot> & {
    onChange?(v?: FilterModel<TType>[]): void;
    onSubmit?(data: Array<FilterModel<TType>>): Promise<TResult | null>;
    value?: FilterModel<TType>[];
  };
