import {
  type _WithEntityModel,
  type _WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/_withEntity.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Embeddable, Entity, Index } from '@mikro-orm/mongodb';
import { InputType, ObjectType } from 'type-graphql';

export const _withEntity = <TType extends unknown>({
  indices = [],
  isAbstract = false,
  isDatabase = false,
  isEmbeddable = false,
  isSchema = true,
  isSchemaInput = true,
  name,
}: _WithEntityParamsModel<TType> = {}): _WithEntityModel =>
  ((Base: TType) => {
    const nameF = name ?? (Base as ClassModel).name;
    isSchema && ObjectType(nameF)(Base as unknown as ClassModel);
    isSchemaInput && InputType(`${nameF}Input`)(Base as unknown as ClassModel);
    let BaseF = isDatabase
      ? (isEmbeddable ? Embeddable : Entity)({
          abstract: isAbstract,
          collection: nameF,
          tableName: nameF,
        })(Base as unknown as ClassModel)
      : Base;
    for (const { keys, type } of indices) {
      BaseF = Index({ properties: keys, type })(BaseF as unknown as ClassModel) as TType;
    }
    return BaseF;
  }) as _WithEntityModel;
