import {
  type WithDatabaseFieldModel,
  type WithDatabaseFieldParamsModel,
} from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';

export const withDatabaseField = <TType extends unknown>({
  ...params
}: WithDatabaseFieldParamsModel<TType> = {}): WithDatabaseFieldModel =>
  withField({ ...params, isDatabase: true });
