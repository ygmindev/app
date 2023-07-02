import { Embeddable, Entity, Index } from '@mikro-orm/core';
import { InputType, ObjectType } from 'type-graphql';

import { type WithEntityParamsModel } from '#lib-backend/resource/utils/withEntity/withEntity.models';
import { type ClassModel } from '#lib-shared/core/core.models';
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
    const _name = name ?? (Base as ClassModel).name;
    isSchema && ObjectType(_name)(Base as unknown as ClassModel);
    isSchemaInput && InputType(`${_name}Input`)(Base as unknown as ClassModel);
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
