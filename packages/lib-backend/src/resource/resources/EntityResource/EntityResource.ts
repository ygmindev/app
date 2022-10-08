import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import { withHook } from '@lib/backend/resource/decorators/withHook/withHook';
import { HOOK_TYPE } from '@lib/backend/resource/decorators/withHook/withHook.constants';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { forEach } from 'lodash';

@withEntity({ isAbstract: true })
export class EntityResource implements EntityResourceModel {
  @withField({ defaultValue: () => new Date(), type: FIELD_TYPE.DATE })
  created!: Date;

  @withField({ type: FIELD_TYPE.PRIMARY_KEY })
  _id!: string;

  @withHook({ type: HOOK_TYPE.BEFORE_CREATE })
  async beforeCreate(): Promise<void> {
    forEach(this, (v, k) => {
      if (isEmpty(v)) {
        delete (this as Record<string, unknown>)[k];
      }
    });
  }
}
