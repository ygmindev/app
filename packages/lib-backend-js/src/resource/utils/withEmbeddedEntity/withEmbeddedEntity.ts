import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import {
  type WithEmbeddedEntityModel,
  type WithEmbeddedEntityParamsModel,
} from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity.models';

export const withEmbeddedEntity = <TType extends unknown>({
  name,
  ...params
}: WithEmbeddedEntityParamsModel<TType> = {}): WithEmbeddedEntityModel =>
  withDatabaseEntity<TType>({ ...params, isEmbeddable: true, name });
