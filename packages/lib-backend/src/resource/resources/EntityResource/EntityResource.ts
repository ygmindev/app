import forEach from 'lodash/forEach';

import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { withHook } from '#lib-backend/resource/utils/withHook/withHook';
import { HOOK_TYPE } from '#lib-backend/resource/utils/withHook/withHook.constants';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

@withEntity({ isAbstract: true })
export abstract class EntityResource implements EntityResourceModel {
  @withField({ defaultValue: () => new Date(), isRepository: true, type: FIELD_TYPE.DATE })
  created!: Date;

  @withField({ isRepository: true, type: FIELD_TYPE.PRIMARY_KEY })
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
