import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import type { WithFieldParamsModel } from '@lib/backend/resource/decorators/withField/withField.models';
import { ArrayType, Embedded, Index, PrimaryKey, Property } from '@mikro-orm/core';
import { Field } from 'type-graphql';
import type { ReturnTypeFuncValue } from 'type-graphql/dist/decorators/types';

const _getField = <TType>({
  Resource,
  isArray,
  type,
}: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    return Field(() => (isArray ? [Resource] : Resource) as ReturnTypeFuncValue, { simple: true });
  }
  switch (type) {
    case FIELD_TYPE.STRING:
      return Field(() => String);
    case FIELD_TYPE.BOOLEAN:
      return Field(() => Boolean);
    case FIELD_TYPE.DATE:
      return Field(() => Date);
    default:
      return Field();
  }
};

const _getColumn = <TType>({
  Resource,
  defaultValue,
  isArray,
  isOptional,
  type,
}: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    return (
      isArray
        ? Embedded(() => Resource, { array: true, nullable: isOptional })
        : Property({ nullable: isOptional, type: () => Resource })
    ) as PropertyDecorator;
  }
  const [_Field, _options] = (() => {
    if (isArray) {
      return [Property, { type: ArrayType }];
    }
    switch (type) {
      case FIELD_TYPE.PRIMARY_KEY:
        return [PrimaryKey, { type: 'ObjectId' }];
      case FIELD_TYPE.ID:
        return [Property, { type: 'ObjectId' }];
      case FIELD_TYPE.STRING:
        return [Property, { type: 'string' }];
      case FIELD_TYPE.DATE:
        return [Property, { type: Date }];
      default:
        return [Property, { type: undefined }];
    }
  })();

  return _Field({
    ..._options,
    nullable: isOptional,
    onCreate: defaultValue || undefined,
  }) as PropertyDecorator;
};

export const withField =
  <TType>({
    type = FIELD_TYPE.COLUMN,
    Resource,
    expire,
    isArray,
    isOptional,
    isRepository = false,
    isSchema = true,
    isUnique,
    defaultValue,
  }: WithFieldParamsModel<TType> = {}): PropertyDecorator =>
  (target, propertyKey) => {
    (expire || isUnique) &&
      (Index({ options: expire ? { expireAfterSeconds: expire } : {} }) as PropertyDecorator)(
        target,
        propertyKey,
      );

    isSchema && _getField({ Resource, isArray, isOptional, type })(target, propertyKey);

    isRepository &&
      _getColumn({ Resource, defaultValue, isArray, isOptional, type })(target, propertyKey);
  };
