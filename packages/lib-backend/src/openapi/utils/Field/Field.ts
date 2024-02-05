import { Specification } from '@lib/backend/openapi/resources/Specification/Specification';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type SpecificationModel } from '@lib/shared/openapi/resources/Specification/Specification.models';
import { type FieldModel, FieldTypeModel } from '@lib/shared/openapi/utils/Field/Field.models';

@withEntity({ name: 'Field' })
export class Field implements FieldModel {
  @withField({ type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isArray?: boolean;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isOptional?: boolean;

  @withField({
    Resource: () => Specification,
    isOptional: true,
    relation: FIELD_RELATION.MANY_TO_MANY,
    type: PROPERTY_TYPE.RESOURCE,
  })
  specification?: SpecificationModel;

  @withField({ type: DATA_TYPE.STRING })
  type!: FieldTypeModel;
}
