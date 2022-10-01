import type { WithEntityParamsModel } from '@lib/backend/resource/decorators/withEntity/withEntity.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Embeddable, Entity } from '@mikro-orm/core';
import { InputType, ObjectType } from 'type-graphql';

export const withEntity = ({
  isAbstract = false,
  isEmbedded = false,
  isRepository = false,
  isSchema = true,
  isSchemaInput = true,
  name,
}: WithEntityParamsModel): ClassDecorator => {
  if (!name && !isAbstract) {
    throw new NotFoundError('name for non-abstract entity');
  }
  return (<TBase>(Base: TBase) => {
    isSchema && ObjectType(name || '', { isAbstract })(Base as unknown as ConstructorModel);
    isSchemaInput && InputType(`${name}Input`, { isAbstract })(Base as unknown as ConstructorModel);
    return isRepository
      ? (isEmbedded ? Embeddable : Entity)({ abstract: isAbstract, collection: name })(
          Base as unknown as ConstructorModel,
        )
      : Base;
  }) as ClassDecorator;
};
