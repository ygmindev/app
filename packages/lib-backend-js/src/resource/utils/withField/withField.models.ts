import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';
import { type FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';

export type WithFieldParamsModel<TType extends unknown> = _WithFieldParamsModel<TType>;

export type WithFieldModel = _WithFieldModel;

export type FieldRelation = `${FIELD_RELATION}`;
