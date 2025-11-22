import { type ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';

export type _WithEntityParamsModel<TType extends unknown> = {
  indices?: Array<{ keys: Array<keyof TType>; type?: 'text' }>;
  isAbstract?: boolean;
  isDatabase?: boolean;
  isEmbeddable?: boolean;
  name?: string;
  schemaType?: ENTITY_SCHEMA_TYPE;
};

export type _WithEntityModel = ClassDecorator;
