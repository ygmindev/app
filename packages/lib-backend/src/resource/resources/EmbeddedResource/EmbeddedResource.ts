import { ObjectId } from '@mikro-orm/mongodb';

import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withHook } from '#lib-backend/resource/decorators/withHook/withHook';
import { HOOK_TYPE } from '#lib-backend/resource/decorators/withHook/withHook.constants';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';

@withEntity({ base: EntityResource, isAbstract: true })
export class EmbeddedResource extends EntityResource implements EmbeddedResourceModel {
  @withHook({ type: HOOK_TYPE.BEFORE_CREATE })
  async beforeCreate(): Promise<void> {
    this._id = this._id ?? (new ObjectId() as unknown as string);
    this.created = this.created ?? new Date();
    return super.beforeCreate();
  }
}
