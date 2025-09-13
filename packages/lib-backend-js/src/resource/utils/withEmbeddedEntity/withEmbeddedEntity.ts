import {
  type WithEmbeddedEntityModel,
  type WithEmbeddedEntityParamsModel,
} from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';

export const withEmbeddedEntity = <TType extends unknown>({
  isDatabase = true,
  name,
  ...params
}: WithEmbeddedEntityParamsModel<TType> = {}): WithEmbeddedEntityModel =>
  withEntity<TType>({ ...params, isDatabase, isEmbeddable: true, name });
