import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';

export type ResourceFilterPropsModel<TType> = Omit<FilterContainerPropsModel<TType>, 'fields'> &
  Pick<TablePropsModel<TType>, 'columns'>;
