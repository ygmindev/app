import { type WithEntityParamsModel } from '@lib/backend/resource/utils/withEntity/withEntity.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Embeddable, Entity, Index } from '@mikro-orm/mongodb';
import { InputType, ObjectType } from 'type-graphql';

export const withEntity = <TType extends unknown>({
  indices = [],
  isAbstract = false,
  isEmbeddable = false,
  isRepository = false,
  isSchema = true,
  isSchemaInput = true,
  name,
}: WithEntityParamsModel<TType> = {}): ClassDecorator => {
  if (!name && !isAbstract) {
    throw new NotImplementedError('name for non-abstract entity');
  }
  return ((Base: TType) => {
    const nameF = name ?? (Base as ClassModel).name;
    isSchema && ObjectType(nameF)(Base as unknown as ClassModel);
    isSchemaInput && InputType(`${nameF}Input`)(Base as unknown as ClassModel);
    let BaseF = isRepository
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
  }) as ClassDecorator;
};
