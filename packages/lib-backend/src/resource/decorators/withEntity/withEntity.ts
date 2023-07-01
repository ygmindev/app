import { Embeddable, Entity, Index } from '@mikro-orm/core';
import { InputType, InterfaceType, ObjectType } from 'type-graphql';

import { type WithEntityParamsModel } from '#lib-backend/resource/decorators/withEntity/withEntity.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { NotImplementedError } from '#lib-shared/core/errors/NotImplementedError/NotImplementedError';

export const withEntity = <TType>({
  base,
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
    isSchema &&
      (isAbstract ? InterfaceType : ObjectType)(
        name || '',
        base ? { implements: base } : undefined,
      )(Base as unknown as ClassModel);
    isSchemaInput &&
      name &&
      (isAbstract ? InterfaceType : InputType)(
        `${name}Input`,
        base ? { implements: base } : undefined,
      )(Base as unknown as ClassModel);
    let BaseF = isRepository
      ? (isEmbedded ? Embeddable : Entity)({ abstract: isAbstract, collection: name })(
          Base as unknown as ClassModel,
        )
      : Base;
    for (const index of indices) {
      BaseF = Index({ properties: index })(BaseF as unknown as ClassModel) as TType;
    }
    return BaseF;
  }) as ClassDecorator;
};
