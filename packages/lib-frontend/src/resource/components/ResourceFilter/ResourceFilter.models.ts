import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';

export type ResourceFilterPropsModel<TType> = Omit<FormContainerPropsModel<TType>, 'fields'> &
  Pick<TablePropsModel<TType>, 'columns'>;
