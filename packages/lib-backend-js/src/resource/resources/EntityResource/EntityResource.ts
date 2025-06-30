import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withHook } from '@lib/backend/resource/utils/withHook/withHook';
import { HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import forEach from 'lodash/forEach';
import isNil from 'lodash/isNil';

@withEntity({ isAbstract: true, isDatabase: true })
export class EntityResource implements EntityResourceModel {
  @withField({ isDatabase: true, type: PROPERTY_TYPE.PRIMARY_KEY })
  _id!: string;

  @withField({ Resource: () => Date, defaultValue: () => new Date(), isDatabase: true })
  created!: Date;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.BOOLEAN })
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
