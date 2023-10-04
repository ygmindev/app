import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '#lib-backend/resource/utils/createFilter/createFilter.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type FilterConditionModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const createFilter = <TType>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  @withEntity({ name: `${name}Filter` })
  class Filter {
    @withField({ type: DATA_TYPE.STRING })
    field!: keyof TType;

    @withField({ type: DATA_TYPE.STRING })
    condition!: FilterConditionModel;
  }

  return Filter as CreateFilterModel<TType>;
};

// import {
//   type CreateFilterModel,
//   type CreateFilterParamsModel,
// } from '#lib-backend/resource/utils/createFilter/createFilter.models';
// import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
// import { PrimitiveValue } from '#lib-backend/resource/utils/PrimitiveValue/PrimitiveValue';
// import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
// import { withField } from '#lib-backend/resource/utils/withField/withField';
// import { type ClassModel, type PartialModel } from '#lib-shared/core/core.models';
// import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
// import { FilterConditionModel } from '#lib-shared/resource/utils/Filter/Filter.models';

// export const createFilter = <TType>({
//   Resource,
//   name,
// }: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
//   @withEntity({ name: `${name}ResourceValue` })
//   class ResourceValue extends (Resource as unknown as ClassModel) {
//     @withField({ Resource: () => Resource, type: PROPERTY_TYPE.RESOURCE })
//     value!: PartialModel<TType>;
//   }

//   @withEntity({ name: `${name}Filter` })
//   class Filter extends createUnion({
//     Resource: [PrimitiveValue, ResourceValue],
//     name: `${name}Filter`,
//   }) {
//     @withField({ type: DATA_TYPE.STRING })
//     field!: keyof TType;

//     @withField({ type: DATA_TYPE.STRING })
//     condition!: FilterConditionModel;
//   }

//   return Filter as CreateFilterModel<TType>;
// };
