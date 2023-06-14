import { Embeddable, Entity, Index } from '@mikro-orm/core';
import { InputType, ObjectType } from 'type-graphql';

import type { WithEntityParamsModel } from '#lib-backend/resource/decorators/withEntity/withEntity.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import { NotImplementedError } from '#lib-shared/core/errors/NotImplementedError/NotImplementedError';

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
    let BaseF = isRepository
      ? (isEmbedded ? Embeddable : Entity)({ abstract: isAbstract, collection: name })(
          Base as unknown as ConstructorModel,
        )
      : Base;
    for (const index of indices) {
      BaseF = Index({ properties: index })(BaseF as unknown as ConstructorModel);
    }
    return BaseF;
  }) as ClassDecorator;
};
