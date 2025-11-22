import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import {
  type InputtableModel,
  type InputtableParamsModel,
} from '@lib/model/resource/Inputtable/Inputtable.models';
import { type ClassModel } from '@lib/shared/core/core.models';

export const Inputtable = <TType extends unknown>({
  Resource,
  name,
}: InputtableParamsModel<TType>): ResourceClassModel<InputtableModel<TType>> => {
  @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
  class Inputtable extends (Resource() as unknown as ClassModel) {}
  return Inputtable as ResourceClassModel<InputtableModel<TType>>;
};
