import { _withField } from '@lib/backend/resource/utils/withField/_withField';
import {
  type WithFieldModel,
  type WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/withField.models';

export const withField = <TType extends unknown>({
  ...params
}: WithFieldParamsModel<TType>): WithFieldModel => _withField({ ...params });
