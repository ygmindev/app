import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withHook } from '@lib/backend/resource/utils/withHook/withHook';
import { HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { ObjectId } from '@mikro-orm/mongodb';

@withEntity({ isAbstract: true, isEmbeddable: true })
export class EmbeddedResource extends EntityResource implements EmbeddedResourceModel {
  @withHook({ type: HOOK_TYPE.BEFORE_CREATE })
  async beforeCreate(): Promise<void> {
    this._id = this._id ?? (new ObjectId() as unknown as string);
    this.created = this.created ?? new Date();
    return super.beforeCreate();
  }
}
