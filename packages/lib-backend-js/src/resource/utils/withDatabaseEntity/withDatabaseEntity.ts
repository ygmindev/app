import {
  type WithDatabaseEntityModel,
  type WithDatabaseEntityParamsModel,
} from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';

export const withDatabaseEntity = <TType extends unknown>({
  ...params
}: WithDatabaseEntityParamsModel<TType>): WithDatabaseEntityModel =>
  withEntity({ ...params, isDatabase: true });
