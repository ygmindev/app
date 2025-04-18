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
  ((target: TType) => {
    const isInputOnly = name?.includes('Input');
    const nameF = name ?? (target as ClassModel).name;
    !isInputOnly && isSchema && ObjectType(nameF)(target as unknown as ClassModel);
    isSchemaInput &&
      InputType(isInputOnly ? nameF : `${nameF}Input`)(target as unknown as ClassModel);

    let BaseF = target;
    if (isDatabase) {
      const Base = (isEmbeddable ? Embeddable : Entity)({
        abstract: isAbstract,
        collection: nameF,
        tableName: nameF,
      })(target as unknown as ClassModel);
      isEmbeddable && (BaseF = Base as TType);
    }

    for (const { keys, type } of indices) {
      BaseF = Index({ properties: keys as Array<never>, type })(
        BaseF as unknown as ClassModel,
      ) as TType;
    }
    return BaseF;
  }) as _WithEntityModel;
