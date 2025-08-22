import { type DATA_TYPE, type PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export enum FIELD_RELATION {
  EMBEDDED = 'embedded',
  MANY_TO_MANY = 'manyToMany',
  MANY_TO_ONE = 'manyToOne',
  ONE_TO_MANY = 'oneToMany',
  ONE_TO_ONE = 'oneToOne',
}

export type FIELD_TYPE = DATA_TYPE | PROPERTY_TYPE;
