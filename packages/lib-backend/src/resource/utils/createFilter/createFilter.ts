import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '#lib-backend/resource/utils/createFilter/createFilter.models';
import { Filter } from '#lib-backend/resource/utils/Filter/Filter';

export const createFilter = <TType>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  return Filter<TType> as CreateFilterModel<TType>;
};

// import isArray from 'lodash/isArray';

// import {
//   type CreateFilterModel,
//   type CreateFilterParamsModel,
// } from '#lib-backend/resource/utils/createFilter/createFilter.models';
// import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
// import { Filter } from '#lib-backend/resource/utils/Filter/Filter';
// import { type ClassModel } from '#lib-shared/core/core.models';
// import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

// export const createFilter = <TType>({
//   Resource,
//   name,
// }: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
//   const nameF = `${name}Filter`;

//   // @withEntity({ name: `${nameF}Resource` })
//   // class ResourceFilter extends (Resource as unknown as ClassModel) {}

//   return createUnion<FilterModel<TType>>({
//     Resource: [Filter as ClassModel],
//     name: nameF,
//     resolve: (value) => (isArray(value) ? Filter : (Resource as ClassModel)),
//   }) as CreateFilterModel<TType>;
// };
