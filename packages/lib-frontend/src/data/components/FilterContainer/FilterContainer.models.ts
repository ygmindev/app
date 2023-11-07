import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';

export type FilterContainerPropsModel<TType> = {
  groups?: Array<FilterGroupPropsModel<TType>>;
};
