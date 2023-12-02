import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type ResourceFilterPropsModel<TType, TResult = void> = Omit<
  FormContainerPropsModel<TType, TResult>,
  'fields' | 'onSubmit'
> &
  Pick<TablePropsModel<TType>, 'columns'> & {
    onSubmit?(data: Array<FilterModel<TType>>): Promise<TResult | null>;
  };
