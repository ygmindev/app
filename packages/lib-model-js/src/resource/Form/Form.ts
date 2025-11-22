import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { type FormModel, type FormParamsModel } from '@lib/model/resource/Form/Form.models';
import { type ClassModel } from '@lib/shared/core/core.models';

export const Form = <TType extends unknown>({
  Resource,
  name,
}: FormParamsModel<TType>): ResourceClassModel<FormModel<TType>> => {
  @withEntity({ name: `${name}Form`, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
  class FormF extends (Resource() as unknown as ClassModel) {}
  return FormF as ResourceClassModel<FormModel<TType>>;
};
