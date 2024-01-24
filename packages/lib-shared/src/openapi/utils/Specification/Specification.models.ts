import { type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type SpecificationModel<TType> = {
  fields: Array<FieldModel<TType>>;
  name: string;
};
