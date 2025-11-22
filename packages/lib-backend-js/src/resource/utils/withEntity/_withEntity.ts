import {
  type _WithEntityModel,
  type _WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/_withEntity.models';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Embeddable, Entity, Index } from '@mikro-orm/mongodb';
import { InputType, ObjectType } from 'type-graphql';

export const _withEntity = <TType extends unknown>({
  indices = [],
  isAbstract = false,
  isDatabase = false,
  isEmbeddable = false,
  name,
  schemaType = ENTITY_SCHEMA_TYPE.ENTITY,
}: _WithEntityParamsModel<TType> = {}): _WithEntityModel =>
  ((target: TType) => {
    const cls = target as ClassModel;
    const nameF = name ?? (target as ClassModel).name;
    // schemaType === ENTITY_SCHEMA_TYPE.ENTITY && ObjectType(nameF)(cls);
    // schemaType === ENTITY_SCHEMA_TYPE.INPUT && InputType(nameF)(cls);

    ObjectType(nameF)(cls);
    InputType(`${nameF}Input`)(cls);

    let BaseF = target;
    if (isDatabase) {
      const Base = (isEmbeddable ? Embeddable : Entity)({
        abstract: isAbstract,
        collection: nameF,
        tableName: nameF,
      })(cls);
      isEmbeddable && (BaseF = Base as TType);
      for (const { keys, type } of indices) {
        BaseF = Index({ properties: keys as Array<never>, type })(
          BaseF as unknown as ClassModel,
        ) as TType;
      }
    }

    return BaseF;
  }) as _WithEntityModel;
