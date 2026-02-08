import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withHook } from '@lib/backend/resource/utils/withHook/withHook';
import { HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { Resource } from '@lib/model/resource/Resource/Resource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import forEach from 'lodash/forEach';
import isNil from 'lodash/isNil';

@withDatabaseEntity({ isAbstract: true })
export class EntityResource extends Resource() implements EntityResourceModel {
  @withDatabaseField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    isOptional: true,
  })
  created?: Date;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isFixture?: boolean;

  @withHook({ type: HOOK_TYPE.BEFORE_CREATE })
  async beforeCreate(): Promise<void> {
    forEach(this, (v, k) => {
      if (isNil(v)) {
        delete (this as Record<string, unknown>)[k];
      }
    });
  }
}
