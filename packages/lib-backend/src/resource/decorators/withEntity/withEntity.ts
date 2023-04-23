import type { WithEntityParamsModel } from '@lib/backend/resource/decorators/withEntity/withEntity.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Embeddable, Entity, Index } from '@mikro-orm/core';
import { InputType, ObjectType } from 'type-graphql';

export const withEntity = <TType>({
  indices = [],
  isAbstract = false,
  isEmbedded = false,
  isRepository = false,
  isSchema = true,
  isSchemaInput = true,
  name,
}: WithEntityParamsModel<TType>): ClassDecorator => {
  if (!name && !isAbstract) {
    throw new NotImplementedError('name for non-abstract entity');
  }
  return ((Base: TType) => {
    isSchema && ObjectType(name ?? '', { isAbstract })(Base as unknown as ConstructorModel);
    isSchemaInput && InputType(`${name}Input`, { isAbstract })(Base as unknown as ConstructorModel);
    let _Base = isRepository
      ? (isEmbedded ? Embeddable : Entity)({ abstract: isAbstract, collection: name })(
          Base as unknown as ConstructorModel,
        )
      : Base;
    for (const index of indices) {
      _Base = Index({ properties: index })(_Base as unknown as ConstructorModel);
    }
    return _Base;
  }) as ClassDecorator;
};
