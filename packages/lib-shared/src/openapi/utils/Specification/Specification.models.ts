import { type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type SpecificationModel = {
  fields: Array<FieldModel>;
  name: string;
};
