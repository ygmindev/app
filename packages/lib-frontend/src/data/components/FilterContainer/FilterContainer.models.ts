import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type FilterContainerPropsModel<TType, TResult = void> = Omit<
  FormContainerPropsModel<TType, TResult>,
  'onSubmit'
> & {
  onSubmit?(data: Array<FilterModel<TType>>): Promise<TResult | null>;
};
